import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useLazyQuery } from '@apollo/client';
import { IS_PALINDROME, IS_ANAGRAM } from '../Apollo/Queries';






const HomePage = () => {
    const [currentText, setCurrentText] = useState("");
    const [messageText, setMessageText] = useState("");
    const [bc, setBc] = useState("red");


    // queries start here ----------------PALINDROME CHECK-------------------------------------------

    const [IsPalindromeString, palindromeData] = useLazyQuery(IS_PALINDROME, {
        variables: {
            currentString: "currentText"
        }
    });

    async function checkPalindrome() {
        if (currentText.length > 0) {
            let data = await IsPalindromeString({ variables: { currentString: currentText } })
            if (data && data.data.isPalindromeString) {
                setMessageText("It is a palindrom String")
                setBc("lightgreen")
            } else {
                setMessageText("Is Not Palindrom String")
                setBc("red")
            }
        }else{
            setMessageText("Please enter valid text!")
            setBc("red")
        }
    }


    
    //  ----------------ANAGRAM CHECK-------------------------------------------

    const [IsAnagramString, anagramData] = useLazyQuery(IS_ANAGRAM, {
        variables: {
            currentString: "currentText"
        }
    });

    async function checkAnagram() {
        if (currentText.length > 0) {
            let data = await IsAnagramString({ variables: { currentString: currentText } })
            if (data && data.data.isAnagramString) {
                setMessageText("It is an anagram String")
                setBc("lightgreen")
            } else {
                setMessageText("Is Not Anagram String")
                setBc("red")
            }
        }else{
            setMessageText("Please enter valid text!")
            setBc("red")
        }
    }


if (palindromeData.loading || anagramData.loading) return <p>Loading...</p>;
if (palindromeData.error || anagramData.error) return <p>Error :</p>;





return (
    <div style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }} >
        <h1 style={{ backgroundColor: 'darkgray', textAlign: 'center', padding: '10px'}}>TEST UI</h1>
        <div style={{ marginLeft: '15%', marginRight: '15%' }}>
            <InputGroup className="mb-3">
                <Form.Control
                    id='inputText'
                    style={{ height: '70px', fontSize: "30px", marginTop: "25px" }}
                    onChange={event => setCurrentText(event.target.value)}
                    placeholder="Input Text"
                    aria-label="Input Text"
                    aria-describedby="basic-addon1"
                    value={currentText}
                />
            </InputGroup>

        </div>


        <div style={{ marginLeft: '15%', marginRight: '15%', display: "flex", justifyContent: 'center' }}>
            <Button onClick={checkPalindrome} style={{ margin: "10px", padding: '15px' }} as="a" variant="primary">
                Check Palindrome
            </Button>
            <Button onClick={checkAnagram} style={{ margin: "10px", padding: '15px' }} as="a" variant="secondary">
                Check Anagram
            </Button>
            <Button style={{ margin: "10px", padding: '15px' }} as="a" variant="success">
                Reverse String
            </Button>
            <Button style={{ margin: "10px", padding: '15px' }} as="a" variant="danger">
                Frequency String
            </Button>
            <Button style={{ margin: "10px", padding: '15px' }} as="a" variant="info">
                Generate Random String
            </Button>
            <Button style={{ margin: "10px", padding: '15px' }} as="a" variant="warning">
                Random Color Generater
            </Button>
        </div>

        {messageText ? (
            <div style={{ marginLeft: '15%', marginRight: '15%', display: "flex", padding: "50px", marginTop: '20px', justifyContent: 'center', backgroundColor: bc, borderRadius: '10px' }}>
                <h1>{messageText}</h1>
            </div>
        ) : null}



    </div>
);
}

export default HomePage