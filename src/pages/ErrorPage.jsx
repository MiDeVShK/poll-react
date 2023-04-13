import React, { useState, useEffect } from 'react';

import Poll from "../assets/components/poll";

const ErrorPage = () => {

return (
    <>
        <main className="flex justify-center h-full">
            <Poll
            category='Lost'
            author='Wilson'
            question='I think you got lost ?'
            answerA='Help me'
            answerB='No I wanted to see the 404 page'
            answerAPourcent= {99}
            answerBPourcent= {99} 
            />
        </main>
    </>
)};

export default ErrorPage