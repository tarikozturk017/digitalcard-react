import React from "react"
import Buttons from "./Buttons"
import Body from "./Body"
import Footer from "./Footer"

export default function Main() {
    return (
        <main>
            <p id="name">Tarik Ozturk</p>
            <p id="job-title">Developer</p>
            <p id="github">github.com/tarikozturk017</p>
            <Buttons />
            <Body />
            <Footer />
        </main>
    )
}