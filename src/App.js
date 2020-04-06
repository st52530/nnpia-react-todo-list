import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {ListPage} from "./components/listPage/ListPage";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Container>
            <ListPage />
        </Container>
    );
}

export default App;
