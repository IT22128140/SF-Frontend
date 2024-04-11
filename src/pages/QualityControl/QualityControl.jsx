import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView'
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import CustomCard2 from "../../components/homecontainer/CustomCard2";

const QualityControl = () => {
    const handleButton1Click = () => {
        // Handle button 1 click logic
      };
    
      const handleButton2Click = () => {
        // Handle button 2 click logic
      };
    
      return (
        <div>
          <CustomCard2
            mainHeader="Main Header"
            subHeader1="Sub Header 1"
            subHeader2="Sub Header 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nulla eu mi sagittis ullamcorper."
            button2Label="Button 2 Label"
            onButton1Click={handleButton1Click}
            onButton2Click={handleButton2Click}
            className=" "
          />
        </div>
      );
    };

export default QualityControl;