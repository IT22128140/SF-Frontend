import React, {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from "react";
import {
  Button,
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarComponent from "./CalendarComponent";


interface Note {
  id: number;
  content: string;
  createdAt: string;
}

const NoteTakingApp: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [, setOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (): void => {
    if (!note.trim()) {
      alert(`Cannot add an empty note.`)
      setOpen(true);
      return;
    }
    const newNote: Note = {
      id: Date.now(),
      content: note,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
    setNote("");
    alert("Note added!");
    setOpen(true);
  };

  const handleDelete = (id: number): void => {
    setNotes(notes.filter((note) => note.id !== id));
    alert("Note deleted!");
    setOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNote(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      handleAddNote();
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const inputRef = useRef<HTMLInputElement>(null); // Specify the type of element

  return (
    <div className='bg-orange-100'>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, mr: 2 }}>
          <TextField
            label="Add a new note"
            variant="outlined"
            value={note}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            margin="normal"
            fullWidth
            InputProps={{
              inputRef: inputRef, // Use InputProps to pass ref to the actual input element
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<NoteAddIcon />}
            onClick={handleAddNote}
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Note
          </Button>
          <Grid container spacing={5} sx={{ mt: 2 }}>
            {notes.map((note) => (
              <Grid item key={note.id} xs={6} sm={6} md={4}>
                <Paper elevation={24} sx={{ mr: 8 }}>
                  <Card sx={{ minWidth: 200, maxWidth: 250 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {note.content}
                      </Typography>
                      <Typography color="textSecondary">
                        Created: {new Date(note.createdAt).toLocaleString()}
                      </Typography>
                    </CardContent>
                    <IconButton
                      onClick={() => handleDelete(note.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <CalendarComponent
          events={notes.map((note) => ({
            title: note.content,
            date: new Date(note.createdAt).toISOString().split("T")[0],
          }))}
        />
      </Box>
    </div>
  );
};

export default NoteTakingApp;
