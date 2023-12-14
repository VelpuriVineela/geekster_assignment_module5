function Card({children}){
    return (
        <div style= {{
        border: '2px solid green',
        padding: '30px',
        borderRadius: '5px',
        margin: '20px',
        width: '60%',
        margin: '20px',
        height: '80%',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
        }}>
           {children}
        </div>

    );
}

function Heading() {
    return (
        <h1 style={{
            textAlign: 'center',
            color:'red',
            fontWeight: 'bold'
        }}>Learn web Development</h1>
    );
}

function FirstDiv() {
    return (
        <div>
            <p style={{
                fontSize: '22px',
                lineHeight: '1.5'
            }}>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites</p>
        </div>
    );
}

function SecondDiv() {
    return (
        <div>
        <p style={{
            fontSize: '22px',
            lineHeight: '1.5'
        }}>The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="https://cdnjs.com/">the rest of MDN</a>, and the other intermediate to advanced resources that assume a lot of previous knowledge.</p>
    </div> 
    );
}

function ThirdDiv() {
    return (
        <div>
            <p style={{
                fontSize: '22px',
                lineHeight: '1.5'
            }}>If you are a complete beginner, web development can be challenging -- we will hold your hand and provide enough datail for you to feel confortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
        </div>
    );
}

ReactDOM.render(
    <Card>
        <Heading />
        <FirstDiv />
        <SecondDiv />
        <ThirdDiv />
    </Card>,
    document.getElementById('root')
);