const excuses = ["I slept past my alarm.", "My dog ate my homework.", "I was playing MMC sumo.", 
    "My phone died.", "My parents won't let me.", "I am too tired.", "I was sleepy.", 
    "I left my second bag at camp.", "I spent all my money on Excusify Pro.", "I had to leave class to see Lebron.", "I broke the diving board at Knollwood (ifykyk).", "My sim card fell in the pool.", "It has meat in it.", "I'm grounded.", "I was playing Clash.", "I got suspended for fighting over Brawl Stars."
    ]
let i = 0
let h2_element = document.getElementById("h2")


function generate() {
    if (i === 15) {
        h2_element.innerHTML = excuses[i]
        i = 0
    }

    else {
        h2_element.innerHTML = excuses[i]
        i++
    }
    
}