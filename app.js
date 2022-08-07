const questionDisplay = document.querySelector('#questions')
const answerDispaly = document.querySelector('#answer')

const questions = [
    {
    id: 0,
    text: "Pick a study abroad destination:",
    answers: [
        {
            text: "London",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            alt: "photo of London",
            credit:"Benjamin Davies"
        },
        {
            text: "Instanbul",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            alt: "photo of Instanbul",
            credit:"Anna Berdnik"
        },
        {
            text: "Paris",
            image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2001&q=80",
            alt: "photo of Paris",
            credit:"Denys Nevozhai"
        },
        {
            text: "Lisbon",
            image: "https://images.unsplash.com/photo-1588535684923-900727736ac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            alt: "photo of Lisbon",
            credit:"Katya Shkiper"
        }
    ]

    },

    {
        id: 1,
        text: "Pick a movie mask",
        answers: [
            {
                text: "Scream",
                image:"https://images.unsplash.com/photo-1635098002183-251622e68b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "ghostface",
                credit:"Mark Bishop"
            },
            {
                text: "Darth Vader",
                image:"https://images.unsplash.com/photo-1605270488815-93566ee46a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
                alt:"Sith Mask",
                credit:"Inkredo Designer"
            },
            {
                text: "The Mask",
                image:"https://cdna.artstation.com/p/assets/images/images/028/437/400/large/the-pxl-art-themaskf.jpg?1594477065",
                alt:"The Mask",
                credit:"THE PXL ART"
            },
            {
                text: "The Phantom",
                image:"https://nofspodcast.com/wp-content/uploads/2020/10/phantom-of-the-paradise-featured-1280x640.png?ezimgfmt=ngcb2/notWebP",
                alt:"Phatom of the Paradise",
                credit:"Harbor Productions"
            },
        ]
    },

    {
        id: 2,
        text: "Pick a black pair of gloves",
        answers: [
            {
                text: "Boxing Glove",
                image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "boxing gloves",
                credit:"Bogdan Yukhymchuk"
            },
            {
                text: "Gucci Glove",
                image:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8b/P00284517.jpg",
                alt: "Gucci",
                credit: "MyTheresa"
            },
            {
                text: "Master Glove",
                image:"https://www.sinful.eu/media/catalog/product/cache/6/thumbnail/602x/9df78eab33525d08d6e5fb8d27136e95/2/1/21673-master-series-fisting-handske-q100-01.jpg",
                alt: "Master Glove",
                credit: "sinful.eu"
            },
            {
                text: "Snow Glove",
                image:"https://images.unsplash.com/photo-1654780085827-728e13783220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Black normal gloves",
                credit:"David Trinks"
            }
        ]
    }
]

const answers = [
    {
        combination: ["London", "Scream", "Snow Glove"],
        text: "Suspiria",
        image:"https://64.media.tumblr.com/35b84e3a244ec26d245afd53b7f0beb2/tumblr_p1c53apcRC1thr7ppo1_1280.jpg",
        alt: "Suspiria"
    },
    {
        combination: ["London", "The Phantom", "Gucci Glove"],
        text: "Deep Red",
        image:"https://dangerousminds.net/content/uploads/images/made/content/uploads/images/Les_Frissons_de_l_Angoisse_465_725_int.jpg",
        alt: "Deep Red"
    },
    {
        combination: ["Paris", "Scream", "Gucci Glove"],
        text: "Phenomena",
        image:"https://aloneandforsakenbyfateandbyman.tumblr.com/post/611249429259911168/embed",
        alt: "Phenomena"
    },
    {
        combination: ["Instanbul", "Darth Vader", "Master Glove"],
        text: "Inferno",
        image:"https://i.pinimg.com/originals/da/31/e0/da31e0667c7507a9a04b3416d4284ca3.jpg",
        alt: "Inferno"
    },
    {
        combination: ["Lisbon", "The Mask", "Boxing Glove"],
        text: "Cat O' Nine Lives",
        image:"https://ih1.redbubble.net/image.798804451.7887/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg",
        alt: "Cat O' Nine Lives"
    },
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
       const titleBlock = document.createElement('div')
       titleBlock.id = question.id
       titleBlock.classList.add('title-block')
       const titleHeading = document.createElement('h2')
       titleHeading.textContent = question.text
       titleBlock.append(titleHeading)
       questionDisplay.append(titleBlock)

    const answersBlock= document.createElement('div')
    answersBlock.id = question.id + "-questions"
    answersBlock.classList.add('answer-options')

    unansweredQuestions.push(question.id)

    question.answers.forEach(answer => {
       const answerBlock = document.createElement('div')
       answerBlock.classList.add("answer-block")
       answerBlock.addEventListener('click',()=> handleClick(question.id, answer.text))
       const answerImage = document.createElement('img')
       answerImage.setAttribute('src', answer.image)
       answerImage.setAttribute('alt', answer.alt)

       const answerTitle = document.createElement('h3')
       answerTitle.textContent = answer.text

       const answerInfo = document.createElement('p')
       const imageLink = document.createElement('a')
       imageLink.setAttribute('href', answer.image)
       imageLink.textContent = answer.credit
       const sourceLink = document.createElement('a')
       sourceLink.textContent = 'unSplash'
       sourceLink.setAttribute('src', 'https://www.unpslash.com')
       answerInfo.append(imageLink, ' to ', sourceLink)

       answerBlock.append(answerImage, answerTitle, answerInfo)
       answersBlock.append(answerBlock)
    })
    questionDisplay.append(answersBlock)
    })

}
populateQuestions()
const handleClick = (questionId, chosenAnswer)=>{
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1){
        unansweredQuestions.splice(itemToRemove, 1)
    
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)
    
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

if (!unansweredQuestions.length) {
    // scroll to answer
    location.href = '#answer'
    showAnswer()
}
}

const showAnswer = () => {
let result
answers.forEach(answer =>{
    if (
        chosenAnswers.includes(answer.combination[0]) +
        chosenAnswers.includes(answer.combination[1]) +
        chosenAnswers.includes(answer.combination[2]) 
    ){
        result = answer
        return
    } else if (!result) {
        //first answer is default
        result = answers[0]
    }
})

   const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('src', result.alt)
    
    answerBlock.append(answerTitle, answerImage)

    answerDispaly.append(answerBlock)

    const allAnswerBlocks =document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}
const disableQuestionBlock = (questionId, chosenAnswer) => {
   const currentQuestionBlock = document.getElementById(questionId + " -questions")

   Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText !== chosenAnswer){
        block.style.opacity = "500%"
    }
   })
}
