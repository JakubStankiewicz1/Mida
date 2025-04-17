import React from 'react';
import './workHereForm.css';

const WorkHereForm = () => {
  return (
    <div className='workHereForm'>
        <div className="workHereFormContainer">
            {/* Top Part */}
            <div className="workHereFormContainerTop">
                <div className="workHereFormContainerTopBottom">
                    <p className="workHereFormContainerTopBottomText">
                        Please complete the form below
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="workHereFormContainerBottom">
                <div className="workHereFormContainerBottomSection">


                    {/* First Part */}
                    <div className="workHereFormContainerBottomSectionFirst">
                        <div className="workHereFormContainerBottomSectionFirstContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Name
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        <p className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainerText">
                                            First Name
                                        </p>
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' />
                                    </div>
                                </div>

                                {/* Right Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomRight">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomRightContainer">
                                        <p className="workHereFormContainerBottomSectionFirstContainerBottomRightContainerText">
                                            Last Name
                                        </p>
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomRightContainerInput' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Second Part */}
                    <div className="workHereFormContainerBottomSectionSecond">
                        <div className="workHereFormContainerBottomSectionSecondContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Email Address
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Third Part */}
                    <div className="workHereFormContainerBottomSectionThird">
                        <div className="workHereFormContainerBottomSectionThirdContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Subject
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* Fourth Part */}
                    <div className="workHereFormContainerBottomSectionFourth">
                        <div className="workHereFormContainerBottomSectionFourthContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Area of employment
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        {/* <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' /> */}
                                        <select name="" id="" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput'>
                                            <option value="">Front of the house</option>
                                            <option value="">Back of the house</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* Fifth Part */}
                    <div className="workHereFormContainerBottomSectionFifth">
                        <div className="workHereFormContainerBottomSectionFifthContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Which location are you applying for?
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFifthContainerBottom">
                                <div className="workHereFormContainerBottomSectionFifthContainerBottomContainer">

                                    {/* Element */}
                                    <div className="workHereFormContainerBottomSectionFifthContainerBottomContainerElement">
                                        <input type="checkbox" className='workHereFormContainerBottomSectionFifthContainerBottomContainerElementInput' />
                                        <p className="workHereFormContainerBottomSectionFifthContainerBottomContainerElementText">
                                            South End Boston, MA
                                        </p>
                                    </div>

                                    {/* Element */}
                                    <div className="workHereFormContainerBottomSectionFifthContainerBottomContainerElement">
                                        <input type="checkbox" className='workHereFormContainerBottomSectionFifthContainerBottomContainerElementInput' />
                                        <p className="workHereFormContainerBottomSectionFifthContainerBottomContainerElementText">
                                            Newton, MA
                                        </p>
                                    </div>

                                    {/* Element */}
                                    <div className="workHereFormContainerBottomSectionFifthContainerBottomContainerElement">
                                        <input type="checkbox" className='workHereFormContainerBottomSectionFifthContainerBottomContainerElementInput' />
                                        <p className="workHereFormContainerBottomSectionFifthContainerBottomContainerElementText">
                                            East Boston, MA
                                        </p>
                                    </div>

                                    {/* Element */}
                                    <div className="workHereFormContainerBottomSectionFifthContainerBottomContainerElement">
                                        <input type="checkbox" className='workHereFormContainerBottomSectionFifthContainerBottomContainerElementInput' />
                                        <p className="workHereFormContainerBottomSectionFifthContainerBottomContainerElementText">
                                            Fenway, Boston, MA
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>







                    {/* Sixth Part */}
                    <div className="workHereFormContainerBottomSectionSixth">
                        <div className="workHereFormContainerBottomSectionSixthContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Specific role
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* Seventh Part */}
                    <div className="workHereFormContainerBottomSectionSeventh">
                        <div className="workHereFormContainerBottomSectionSeventhContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    Paste your resume here
                                </p>

                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        {/* <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' /> */}
                                        <textarea name="" id="" cols="60" rows="20" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerTextarea'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>














                    {/* Eighth Part */}
                    <div className="workHereFormContainerBottomSectionEighth">
                        <div className="workHereFormContainerBottomSectionEighthContainer">
                            {/* Top Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerTop">
                                <p className="workHereFormContainerBottomSectionFirstContainerTopTextOne">
                                    What are the 5 words that come to mind when you think about hospitality?    
                                </p>

                                {/* <p className="workHereFormContainerBottomSectionFirstContainerTopTextTwo">
                                    (required)
                                </p> */}
                            </div>

                            {/* Bottom Part */}
                            <div className="workHereFormContainerBottomSectionFirstContainerBottom">
                                {/* Left Part */}
                                <div className="workHereFormContainerBottomSectionFirstContainerBottomLeft">
                                    <div className="workHereFormContainerBottomSectionFirstContainerBottomLeftContainer">
                                        <input type="text" className='workHereFormContainerBottomSectionFirstContainerBottomLeftContainerInput' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ninth Part */}
                    <div className="workHereFormContainerBottomSectionNinth">
                        <div className="workHereFormContainerBottomSectionNinthContainer">
                            <div className="workHereFormContainerBottomSectionNinthContainerBtn">
                                <p className="workHereFormContainerBottomSectionNinthContainerBtnText">
                                    Submit
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHereForm