import {songs} from "./musicLibrary.js";

const player = document.querySelector('.player')
const textContainer = document.querySelector('.textContainer')
const lyric = document.querySelector('#lyric')
const tracks = document.querySelector('#tracks')

songs.forEach((song)=>{
    const track = document.createElement("div")
    const title = document.createElement("span")
    title.textContent = song.songTitle
    tracks.appendChild(title)
    tracks.appendChild(track)
})

const syncData =[
    {
        "text": "It's a holiday, yeah",
        "startTime": 15.21,
        "stopTime": 19.74,
        "type": "word"
    },
    {
        "text": "Spend it with you baby",
        "startTime": 19.74,
        "stopTime": 23.44,
        "type": "word"
    },
    {
        "text": "I think that I am in love this Christmas, yeah",
        "startTime": 23.44,
        "stopTime": 28.44,
        "type": "word"
    },
    {
        "text": "Just hang your stockings on the fireplace",
        "startTime": 31.16,
        "stopTime": 35.17,
        "type": "word"
    },
    {
        "text": "You know that Santa's coming to town",
        "startTime": 35.17,
        "stopTime": 38.52,
        "type": "word"
    },
    {
        "text": "I'm the one who wants to take you on a sleigh right now",
        "startTime": 38.52,
        "stopTime": 43.52,
        "type": "word"
    },
    {
        "text": "So today is all about you babe",
        "startTime": 45.46,
        "stopTime": 49.45,
        "type": "word"
    },
    {
        "text": "The mistletoe can pull us closer",
        "startTime": 49.45,
        "stopTime": 51.42,
        "type": "word"
    },
    {
        "text": "It's what I'm waiting for",
        "startTime": 51.42,
        "stopTime": 54.07,
        "type": "word"
    },
    {
        "text": "It sorta feels like it's Valentine's, Valentine's",
        "startTime": 54.07,
        "stopTime": 59.01,
        "type": "word"
    },
    {
        "text": "So in on top of your roof",
        "startTime": 59.01,
        "stopTime": 61.05,
        "type": "word"
    },
    {
        "text": "Them sleigh bells is ringing",
        "startTime": 61.05,
        "stopTime": 62.7,
        "type": "word"
    },
    {
        "text": "I'll be up all night with you",
        "startTime": 62.7,
        "stopTime": 64.68,
        "type": "word"
    },
    {
        "text": "Don't care what they're saying",
        "startTime": 64.68,
        "stopTime": 66.59,
        "type": "word"
    },
    {
        "text": "Japan to Peru, baby me and you",
        "startTime": 66.59,
        "stopTime": 70.28,
        "type": "word"
    },
    {
        "text": "This Christmas Eve",
        "startTime": 70.28,
        "stopTime": 74.43,
        "type": "word"
    },
    {
        "text": "Be my date this Christmas Eve",
        "startTime": 74.43,
        "stopTime": 77.69,
        "type": "word"
    },
    {
        "text": "Be my holiday, my dream",
        "startTime": 77.69,
        "stopTime": 81.41,
        "type": "word"
    },
    {
        "text": "Lay your head on me",
        "startTime": 81.41,
        "stopTime": 84.11,
        "type": "word"
    },
    {
        "text": "I got you babe, whoa oh",
        "startTime": 84.11,
        "stopTime": 88.73,
        "type": "word"
    },
    {
        "text": "Kissing underneath the tree",
        "startTime": 88.73,
        "stopTime": 92.89,
        "type": "word"
    },
    {
        "text": "I don't need no presents girl",
        "startTime": 92.89,
        "stopTime": 94.14,
        "type": "word"
    },
    {
        "text": "You're everything I need",
        "startTime": 94.14,
        "stopTime": 96.16,
        "type": "word"
    },
    {
        "text": "Let me give you all of me",
        "startTime": 96.16,
        "stopTime": 101.16,
        "type": "word"
    },
    {
        "text": "Together on this Christmas Eve",
        "startTime": 101.92,
        "stopTime": 104.8,
        "type": "word"
    },
    {
        "text": "You leave some cookies out",
        "startTime": 104.8,
        "stopTime": 106.9,
        "type": "word"
    },
    {
        "text": "I'ma eat 'em up",
        "startTime": 106.9,
        "stopTime": 111.2,
        "type": "word"
    },
    {
        "text": "Nobody can see me but you",
        "startTime": 111.2,
        "stopTime": 113.68,
        "type": "word"
    },
    {
        "text": "It's so magical",
        "startTime": 113.68,
        "stopTime": 117.95,
        "type": "word"
    },
    {
        "text": "When we use imagination",
        "startTime": 117.95,
        "stopTime": 121.7,
        "type": "word"
    },
    {
        "text": "We can fly to never never land",
        "startTime": 121.7,
        "stopTime": 125.25,
        "type": "word"
    },
    {
        "text": "The North Pole ain't that cold",
        "startTime": 125.25,
        "stopTime": 129.19,
        "type": "word"
    },
    {
        "text": "If you wanna go",
        "startTime": 129.19,
        "stopTime": 131.1,
        "type": "word"
    },
    {
        "text": "I got you baby",
        "startTime": 131.1,
        "stopTime": 133.21,
        "type": "word"
    },
    {
        "text": "Be my date this Christmas Eve",
        "startTime": 133.21,
        "stopTime": 136.65,
        "type": "word"
    },
    {
        "text": "Be my holiday, my dream",
        "startTime": 136.65,
        "stopTime": 140.4,
        "type": "word"
    },
    {
        "text": "Lay your head on me",
        "startTime": 140.4,
        "stopTime": 143.13,
        "type": "word"
    },
    {
        "text": "I got you babe, whoa oh",
        "startTime": 143.13,
        "stopTime": 147.8,
        "type": "word"
    },
    {
        "text": "Kissing underneath the tree",
        "startTime": 147.8,
        "stopTime": 151.74,
        "type": "word"
    },
    {
        "text": "I don't need no presents girl",
        "startTime": 151.74,
        "stopTime": 153.16,
        "type": "word"
    },
    {
        "text": "You're everything I need",
        "startTime": 153.16,
        "stopTime": 155.24,
        "type": "word"
    },
    {
        "text": "Let me give you all of me",
        "startTime": 155.24,
        "stopTime": 160.24,
        "type": "word"
    },
    {
        "text": "Together on this Christmas Eve",
        "startTime": 160.82,
        "stopTime": 163.32,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Eve",
        "startTime": 163.32,
        "stopTime": 166.3,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Christmas",
        "startTime": 166.3,
        "stopTime": 170.01,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Eve",
        "startTime": 170.01,
        "stopTime": 173.7,
        "type": "word"
    },
    {
        "text": "I promise I won't do you wrong",
        "startTime": 173.7,
        "stopTime": 177.74,
        "type": "word"
    },
    {
        "text": "Be my date this Christmas Eve",
        "startTime": 177.74,
        "stopTime": 181.05,
        "type": "word"
    },
    {
        "text": "Be my holiday, my dream",
        "startTime": 181.05,
        "stopTime": 184.92,
        "type": "word"
    },
    {
        "text": "Lay your head on me",
        "startTime": 184.92,
        "stopTime": 187.43,
        "type": "word"
    },
    {
        "text": "I got you babe",
        "startTime": 187.43,
        "stopTime": 192.3,
        "type": "word"
    },
    {
        "text": "Kissing underneath the tree",
        "startTime": 192.3,
        "stopTime": 196.06,
        "type": "word"
    },
    {
        "text": "I don't need no presents girl",
        "startTime": 196.06,
        "stopTime": 197.47,
        "type": "word"
    },
    {
        "text": "You're everything I need",
        "startTime": 197.47,
        "stopTime": 199.54,
        "type": "word"
    },
    {
        "text": "Let me give you all of me",
        "startTime": 199.54,
        "stopTime": 204.54,
        "type": "word"
    },
    {
        "text": "Together on this Christmas Eve",
        "startTime": 205.05,
        "stopTime": 207.51,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Eve",
        "startTime": 207.51,
        "stopTime": 210.6,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Eve",
        "startTime": 210.6,
        "stopTime": 215.6,
        "type": "word"
    },
    {
        "text": "Be my, be my, Christmas Eve",
        "startTime": 218.19,
        "stopTime": 222.03,
        "type": "word"
    }
]

/*
syncData.forEach((item)=> {
    const div = document.createElement("div")
    const spanTag = document.createElement("span")
    div.appendChild(spanTag)
    div.appendChild(document.createElement("br"))
    textContainer.appendChild(div)
    spanTag.innerText=item.text

   // textTypingEffect(spanTag,item.text)

})
*/
let previous = -1
let lyricID = -1
player.addEventListener('timeupdate',()=>{
    const currentTime = player.currentTime
    let last = -1;
    for (let i=0; i < syncData.length; i++){
        let item = syncData[i]
        if(currentTime>item.startTime){
           last = i
        }

    }
    if (previous!== last){
        previous = last
        console.log(previous,last,syncData[last])
        lyric.textContent=""
        lyricID++
        textTypingEffect(lyric,syncData[last],lyricID)
    }
})

function textTypingEffect(element,item,currID, i=0){
    if(currID !== lyricID){
     return;
    }
    let text = item.text
    let duration = item.stopTime - item.startTime
    let avg = duration/text.length
    console.log(duration,avg)
    element.textContent += text[i];
    if( i === text.length -1){
    return;
    }
    setTimeout(() => {
        textTypingEffect(element, item, currID,i +1);
    }, avg*400); //

}