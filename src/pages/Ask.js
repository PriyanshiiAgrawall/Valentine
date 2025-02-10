import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ask() {
    const navigate = useNavigate();
    const noButtonTexts = [
        "Please 😥",
        "Please Don't Break My Heart 🥺",
        "Are You Really Doing This? 😭",
        "NOOOOOOOOOOOOOOO, Please 😖",
        "You have My Heart Please! 🥹",
        "But... I Love You! 😭",
        "Don't Do This To Me 😢",
        "My Heart Is Breaking 💔",
        "You Were My Only Hope 🥺",
        "I'll Cry Forever If You Say No 😭",
        "Think About Our Future 😖",
        "What About All The Good Times? 🥹",
        "You're Hurting Me 💔💔",
        "Please, Just One Chance 🥺",
        "Don't Leave Me Hanging 😢",
        "I Can't Believe This 😭",
        "You're My Whole World 😖",
        "I Thought We Had Something Special 💕",
        "What Did I Do Wrong? 😞",
        "At Least Think About It... 🥺",
        "I'm Begging You 😭🙏",
        "No?! But I Got You Flowers! 🌹😭",
        "I Swear I'll Be The Best! 😢",
        "Just One Date, Please? 🥺",
        "I'll Never Give Up On You! 💖"
    ];
    const [popups, setPopups] = useState([]);
    const noGifs = ["https://media.tenor.com/Q9VuGIKQqEMAAAAi/love-bear.gif", "https://media1.tenor.com/m/vQKbLu6Y2WQAAAAC/crying-sad.gif", "https://media.tenor.com/sWXhCC4A2woAAAAi/bubu-bubu-dudu.gif", "https://media.tenor.com/yZoKXA08ZyYAAAAi/bubu-bubu-dudu.gif", "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif", "https://media1.tenor.com/m/8RvB4apm9LgAAAAC/dudu-crying-sad.gif", "https://media.tenor.com/F7AIHf8-ZUYAAAAi/bubu-yier.gif"];
    const textSizes = ["4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];

    const [gifno, setGifno] = useState(-1);
    const [noMessageNumber, setNoMessageNumber] = useState(-1);
    const [yesSizex, setYesSizex] = useState(8);
    const [yesSizey, setYesSizey] = useState(4);
    const [yesTextSize, setYesTextSize] = useState("4xl");
    const [toggle, setToggle] = useState(true);
    const gifLen = noGifs.length;
    const noMessageLen = noButtonTexts.length;
    const textSizesLen = textSizes.length;
    function handleYes() {
        navigate("/yes");

    }
    function handleNo() {
        setGifno((gifno + 1) % gifLen);
        setNoMessageNumber((noMessageNumber + 1) % noMessageLen);
        const newPopup = {
            message: noButtonTexts[(noMessageNumber + 1) % noMessageLen],
            position: {
                x: Math.random() * (window.innerWidth - 200),
                y: Math.random() * (window.innerHeight - 100),
            },
        };

        setPopups((prev) => [...prev, newPopup]);

        setYesSizex((prev) => prev + 2);
        setYesSizey((prev) => prev + 1);
        setYesTextSize((prev) => {
            const currentIndex = textSizes.indexOf(prev);
            return currentIndex < textSizesLen - 1 ? textSizes[currentIndex + 1] : prev;
        });
    }


    return (<div className="flex flex-col items-center mx-6 my-6 bg-gradient-to-r from-custom-pink1 via-custom-fuchsia to-custom-pink2">

        <div><h1 className="text-4xl font-extrabold dark:text-whites" >Will You Be My Valentine? 😘</h1></div>
        <div><img className="w-full max-w-96 h-96" src={gifno === -1 ? "https://media.tenor.com/D1CAg1rBD6wAAAAi/tkthao219-bubududu.gif" : noGifs[gifno]} alt="cute gif"></img></div>
        <div>
            <button
                className={`mr-16 my-20 text-white font-bold text-${yesTextSize} bg-[#E8384B] hover:bg-[#e81027] rounded-lg shadow-md transition-all duration-300 border-2 border-[#F8F8F8]`}
                style={{
                    padding: `${yesSizey * 5}px ${yesSizex * 6}px`,
                    fontSize: `${(textSizes.indexOf(yesTextSize) + 3) * 8}px`
                }}
                onClick={handleYes}
            >
                Yes!
            </button>


            <button className="ml-16 my-20 px-8 py-4 text-white font-bold text-xl bg-[#D9A4FF] hover:bg-[#D291FF] rounded-lg shadow-md transition-all duration-300 border-2 border-[#F8F8F8]" onClick={handleNo}>
                {noMessageNumber === -1 ? "No!" : noButtonTexts[noMessageNumber]}
            </button>

        </div>
        <div className="flex items-center space-x-2 mt-4">
            <span className="text-lg font-semibold">Popups:</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FCDAB7] dark:peer-focus:ring-[#FCDAB7] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FCDAB7]"></div>

            </label>
        </div>
        <div>
            {toggle && popups.map((popup, index) => (
                <PopUp key={index} message={popup.message} position={popup.position} />
            ))}
        </div>
    </div>)
};

function PopUp({ message, position }) {
    return (
        <div
            className="absolute bg-red-300 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity"
            style={{ top: position.y, left: position.x }}
        >
            {message}
        </div>
    );
}

export default Ask;