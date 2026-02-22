const app = document.getElementById('app');

// --- Data --- //
const tests = {
    innerStar: {
        id: 'innerStar',
        title: "Discover Your Inner Star!",
        description: "Answer a few simple questions to find out your personality type.",
        calculation: 'mostVoted',
        questions: [
            { text: "If you were a star, what kind would you be?", answers: [{ text: "A super bright, dazzling one!", value: 'A' }, { text: "A cool, mysterious, distant one.", value: 'B' }, { text: "A friendly one in a big group (a constellation).", value: 'C' }] },
            { text: "Your spaceship is exploring a new galaxy. What do you do first?", answers: [{ text: "Land on the most colorful planet!", value: 'A' }, { text: "Scan for alien life from a safe distance.", value: 'B' }, { text: "Try to communicate with any ships you see.", value: 'C' }] },
            { text: "You found a magic space crystal! What power does it give you?", answers: [{ text: "The power to create amazing art and music!", value: 'A' }, { text: "The power to know all the secrets of the universe.", value: 'B' }, { text: "The power to make friends with everyone you meet.", value: 'C' }] },
            { text: "What's your favorite space snack?", answers: [{ text: "Sparkling stardust candy!", value: 'A' }, { text: "Quiet moon cheese.", value: 'B' }, { text: "Cosmic party popcorn to share.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Dazzling Comet", description: "You're full of energy, creativity, and love to be the center of attention. You leave a trail of sparkle wherever you go!", image: "https://images.unsplash.com/photo-1534278931741-314a575b583f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Wise Nebula", description: "You are thoughtful, curious, and a little mysterious. You have a deep and wise inner world where amazing ideas are born.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Friendly Galaxy", description: "You are a social butterfly who loves being with friends. You bring people together and create a universe of fun!", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    futurePartner: {
        id: 'futurePartner',
        title: "Future Partner's Face Test",
        description: "Find out what your future best friend might look like!",
        calculation: 'mbti',
        questions: [
            { text: "When you meet a new friend, do you...", answers: [{ text: "Talk a lot and get excited!", value: 'E' }, { text: "Listen quietly and observe.", value: 'I' }] },
            { text: "On the weekend, you'd rather...", answers: [{ text: "Go on a big adventure outdoors!", value: 'S' }, { text: "Imagine and create your own world indoors.", value: 'N' }] },
            { text: "If a friend is sad, you...", answers: [{ text: "Try to solve their problem with logic.", value: 'T' }, { text: "Give them a big hug and comfort them.", value: 'F' }] },
            { text: "You like your room to be...", answers: [{ text: "Super neat and organized.", value: 'J' }, { text: "A little messy and full of interesting things.", value: 'P' }] },
            { text: "At a party, you are more likely to...", answers: [{ text: "Be the center of all the fun and games.", value: 'E' }, { text: "Have a deep chat with one or two friends.", value: 'I' }] },
            { text: "Your ideal pet would be...", answers: [{ text: "A loyal dog that loves to play fetch.", value: 'S' }, { text: "A mysterious cat that has its own secrets.", value: 'N' }] },
            { text: "When you build with LEGOs, you...", answers: [{ text: "Follow the instructions perfectly.", value: 'T' }, { text: "Build whatever your heart desires!", value: 'F' }] },
            { text: "When planning a fun day, you...", answers: [{ text: "Make a detailed schedule of activities.", value: 'J' }, { text: "Just see where the day takes you!", value: 'P' }] }
        ],
        results: {
            'ISTJ': { title: "The Loyal Guardian", description: "A reliable and kind friend with a warm, gentle smile and steady, trustworthy eyes.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISFJ': { title: "The Gentle Protector", description: "A caring and sweet face, with expressive eyes that show they're always looking out for you.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INFJ': { title: "The Wise Counselor", description: "A mysterious and thoughtful look, with a calm expression and eyes that seem to know your secrets.", image: "https://images.unsplash.com/photo-1516726884483-7d1253721376?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INTJ': { title: "The Clever Strategist", description: "An intense and intelligent face, with sharp, focused eyes and a hint of a smile.", image: "https://images.unsplash.com/photo-1588516135832-063a69137596?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISTP': { title: "The Bold Explorer", description: "A cool and adventurous look, with a playful smirk and eyes full of curiosity.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISFP': { title: "The Artistic Adventurer", description: "A creative and gentle face, with dreamy eyes and a unique, artistic flair.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INFP': { title: "The Poetic Dreamer", description: "A kind and whimsical face, with soft, caring eyes and a thoughtful, faraway look.", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INTP': { title: "The Curious Thinker", description: "A quirky and intelligent face, with bright, curious eyes that are always analyzing the world.", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESTP': { title: "The Energetic Dynamo", description: "A bold and confident face, with a big, daring grin and eyes that sparkle with excitement.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESFP': { title: "The Sparkling Entertainer", description: "A fun-loving and expressive face, with a contagious laugh and eyes that are always smiling.", image: "https://images.unsplash.com/photo-1526510747491-58f928a7630f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENFP': { title: "The Enthusiastic Champion", description: "A bright and cheerful face, with a wide, optimistic smile and eyes full of passion.", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENTP': { title: "The Witty Debater", description: "A clever and mischievous face, with a playful glint in their eyes and a quick, witty smile.", image: "https://images.unsplash.com/photo-1542327897-414ecb6364b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESTJ': { title: "The Confident Leader", description: "A strong and determined face, with a confident expression and a commanding presence.", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESFJ': { title: "The Caring Host", description: "A warm and friendly face, with a welcoming smile that makes everyone feel at home.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENFJ': { title: "The Inspiring Guide", description: "An engaging and charismatic face, with a magnetic smile and eyes that inspire trust.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENTJ': { title: "The Bold Commander", description: "A powerful and ambitious face, with a sharp, focused look and an air of natural authority.", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    friendshipStyle: {
        id: 'friendshipStyle',
        title: "My Friendship Style Test",
        description: "Find out what kind of friend you are!",
        calculation: 'mostVoted',
        questions: [
            { text: "A friend hasn't replied to your message. What do you think?", answers: [{ text: "They're just busy, they'll reply later.", value: 'A' }, { text: "Oh no! Did I say something wrong?", value: 'B' }, { text: "I'll just wait. They'll text me when they can.", value: 'C' }] },
            { text: "When you're having a tough day, you...", answers: [{ text: "Talk about it with a close friend.", value: 'A' }, { text: "Worry a lot and really need a hug.", value: 'B' }, { text: "Prefer to handle it by myself first.", value: 'C' }] },
            { text: "A new student joins your class. You...", answers: [{ text: "Say hi and ask them to play at recess!", value: 'A' }, { text: "Hope they like you and try really hard to be their friend.", value: 'B' }, { text: "Give them space and let them settle in.", value: 'C' }] },
            { text: "Your best friend is playing with someone else. You feel...", answers: [{ text: "Happy for them! I'll join in or do my own thing.", value: 'A' }, { text: "A little left out and wish they would invite me.", value: 'B' }, { text: "It's cool. I can have fun on my own.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Steady Supporter", description: "You are a loyal and trustworthy friend. People know they can always count on you, and you build friendships that are strong and last long!", image: "https://images.unsplash.com/photo-1562783530-df28387211e8?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Eager Friend", description: "You have a huge heart and love your friends very much! You're always full of excitement and joy when you're with them.", image: "https://images.unsplash.com/photo-1623998021882-942699f43a9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Independent Explorer", description: "You are a strong and confident friend. You enjoy your own adventures but you are always there for your friends when they need you.", image: "https://images.unsplash.com/photo-1589992896382-03c6a3b03431?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    tetoEgen: {
        id: 'tetoEgen',
        title: "Friendship Vibe: Teto vs. Egen",
        description: "Are you an expressive Teto or a reserved Egen friend?",
        calculation: 'mostVoted',
        questions: [
            { text: "When you give a friend a gift, you...", answers: [{ text: "Can't wait to see them open it and get excited!", value: 'T' }, { text: "Leave it for them to find and enjoy later.", value: 'E' }] },
            { text: "To say thank you, you'd rather...", answers: [{ text: "Give them a big hug and say 'Thank you!' many times.", value: 'T' }, { text: "Do something nice for them in return later.", value: 'E' }] },
            { text: "Your friend is showing you jejich new toy. You...", answers: [{ text: "Gasp and say 'Wow, that's so cool!'", value: 'T' }, { text: "Nod and say 'Nice. Can I see how it works?'", value: 'E' }] },
            { text: "How do you show you care?", answers: [{ text: "By telling them they're your best friend all the time.", value: 'T' }, { text: "By making sure they have everything they need.", value: 'E' }] }
        ],
        results: {
            'T': { title: "A Sweet Teto Friend", description: "You are full of affection and love to express it! Your friends always know how much you care because you show it with big reactions and lots of words.", image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'E': { title: "A Cool Egen Friend", description: "You are a strong, silent pillar for your friends. You might not use a lot of words, but your actions and loyalty speak volumes.", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    imaginationLevel: {
        id: 'imaginationLevel',
        title: "My Imagination Level Test",
        description: "How creative and imaginative are you? Let's find out!",
        calculation: 'mostVoted',
        questions: [
            { text: "If clouds were made of cotton candy, what would you do?", answers: [{ text: "Fly up and have a giant feast!", value: 'A' }, { text: "Build a soft, bouncy castle on them.", value: 'B' }, { text: "Wonder what flavor the rain would be.", value: 'C' }] },
            { text: "You find a door in a tree. What's behind it?", answers: [{ text: "A library of glowing storybooks.", value: 'C' }, { text: "A workshop full of magical gadgets.", value: 'B' }, { text: "A hidden world of talking animals.", value: 'A' }] },
            { text: "If you could invent a new holiday, what would it celebrate?", answers: [{ text: "A day for building amazing things!", value: 'B' }, { text: "A day for telling silly stories.", value: 'C' }, { text: "A day where everyone's dreams come true.", value: 'A' }] }
        ],
        results: {
            'A': { title: "The Dream Weaver", description: "Your imagination is limitless! You dream up fantastic worlds and beautiful possibilities, making life more magical.", image: "https://images.unsplash.com/photo-1501862459425-789c5225be3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Clever Inventor", description: "You have a sharp and inventive mind! You see problems as puzzles and love coming up with brilliant new ideas and solutions.", image: "https://images.unsplash.com/photo-1620712943543-95969871587a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Story Spinner", description: "You are a master storyteller! You can turn any idea into a thrilling adventure, captivating everyone around you with your words.", image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    superheroType: {
        id: 'superheroType',
        title: "If I Were a Superhero?",
        description: "Discover your unique superhero alter ego!",
        calculation: 'mostVoted',
        questions: [
            { text: "When a villain appears, what's your first move?", answers: [{ text: "Protect the people around you first!", value: 'A' }, { text: "Quickly analyze the villain's weakness.", value: 'C' }, { text: "Rush in to stop them as fast as possible!", value: 'B' }] },
            { text: "What kind of superpower would you want?", answers: [{ text: "The power to control plants and talk to animals.", value: 'D' }, { text: "Super speed to be everywhere at once.", value: 'B' }, { text: "Invincible strength and the ability to fly.", value: 'A' }] },
            { text: "Your superhero costume must have...", answers: [{ text: "A high-tech gadget belt.", value: 'C' }, { text: "A cool cape that helps you fly.", value: 'A' }, { text: "Colors that blend in with nature.", value: 'D' }] }
        ],
        results: {
            'A': { title: "The Guardian of the Big City", description: "You are a classic hero with a strong sense of justice. You are brave, powerful, and always there to protect the innocent.", image: "https://images.unsplash.com/photo-1534809564321-f85101683f12?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Super-Fast Rescuer", description: "You are quick on your feet and even quicker to help! You zip around the world, saving the day before anyone is in danger.", image: "https://images.unsplash.com/photo-1593444939787-c035661a3f6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Genius Inventor Hero", description: "You use your incredible brain to save the day! You invent amazing gadgets and create brilliant plans to outsmart any villain.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'D': { title: "The Nature-Powered Protector", description: "You draw your strength from the earth, sky, and sea. You are a calm but powerful hero who protects all living things.", image: "https://images.unsplash.com/photo-1608933963428-2c3886e44a3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    snackPersonality: {
        id: 'snackPersonality',
        title: "My Snack Personality Analysis!",
        description: "What does your favorite snack say about you?",
        calculation: 'mostVoted',
        questions: [
            { text: "What's your go-to tteokbokki spice level?", answers: [{ text: "Super spicy, bring on the fire!", value: 'A' }, { text: "Sweet and savory, the perfect balance.", value: 'B' }, { text: "Just a little kick is enough for me.", value: 'C' }] },
            { text: "You're at a carnival. What do you eat first?", answers: [{ text: "A giant, fluffy cloud of cotton candy.", value: 'B' }, { text: "A bag of salty, crunchy potato chips.", value: 'C' }, { text: "A spicy chicken skewer!", value: 'A' }] },
            { text: "Choose a drink to go with your snack.", answers: [{ text: "A cool, sweet fruit juice.", value: 'B' }, { text: "A fizzy, exciting soda.", value: 'A' }, { text: "A simple bottle of water is best.", value: 'C' }] }
        ],
        results: {
            'A': { title: "Spicy & Thrilling Tteokbokki", description: "You are adventurous, energetic, and always up for a challenge! You live life to the fullest and never back down from excitement.", image: "https://images.unsplash.com/photo-1570878544025-634547c94543?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "Sweet & Fluffy Cotton Candy", description: "You are a kind, gentle, and dreamy person. You find joy in the little things and have a wonderfully sweet imagination.", image: "https://images.unsplash.com/photo-1594917417036-9a2d39b8c09a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "Salty & Crunchy Potato Chips", description: "You are cool, logical, and have a sharp sense of humor. You are a reliable friend who knows how to stay classic and true.", image: "https://images.unsplash.com/photo-1599490659213-e2b83a9e5087?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    innerAnimal: {
        id: 'innerAnimal',
        title: "Find Your Inner Animal",
        description: "Discover the animal that represents your true inner self!",
        calculation: 'mostVoted',
        questions: [
            { text: "You're lost in a forest. What do you do?", answers: [{ text: "Climb the tallest tree to see the way.", value: 'A' }, { text: "Roar loudly to scare away any danger.", value: 'B' }, { text: "Follow a stream, enjoying the journey.", value: 'C' }] },
            { text: "A friend needs advice. You...", answers: [{ text: "Offer a wise, well-thought-out solution.", value: 'A' }, { text: "Encourage them to be strong and brave.", value: 'B' }, { text: "Listen with empathy and go with the flow.", value: 'C' }] },
            { text: "What's your favorite time of day?", answers: [{ text: "The quiet, mysterious night.", value: 'A' }, { text: "The bright, sunny afternoon.", value: 'B' }, { text: "The playful, magical twilight.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Wise Owl", description: "You are observant, thoughtful, and full of wisdom. You see things others miss and have a calm, mysterious strength.", image: "https://images.unsplash.com/photo-1571551323497-8b0210300a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Brave Lion", description: "You are a natural leader, full of courage and a powerful presence. You protect your friends and face challenges head-on.", image: "https://images.unsplash.com/photo-1546182990-dffeaf781f7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Free-Spirited Dolphin", description: "You are playful, social, and intelligent. You navigate life with joy and curiosity, making friends wherever you go.", image: "https://images.unsplash.com/photo-1550997886-2273293a93c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    secretPower: {
        id: 'secretPower',
        title: "Discover Your Secret Superpower",
        description: "What amazing, hidden ability do you possess?",
        calculation: 'mostVoted',
        questions: [
            { text: "A friend is sad but won't say why. You...", answers: [{ text: "Just seem to know what they're feeling.", value: 'A' }, { text: "Wish you could turn back time to fix it.", value: 'B' }, { text: "Your calm presence makes them feel better.", value: 'C' }] },
            { text: "You have a big test tomorrow. You wish you could...", answers: [{ text: "Instantly know all the answers.", value: 'A' }, { text: "Have a little more time to study.", value: 'B' }, { text: "Stay calm and not feel any stress.", value: 'C' }] },
            { text: "What kind of magic would you want to learn?", answers: [{ text: "Magic to connect with others' thoughts.", value: 'A' }, { text: "Magic to control the flow of moments.", value: 'B' }, { text: "Magic to soothe any pain or sadness.", value: 'C' }] }
        ],
        results: {
            'A': { title: "Mind-Reading Telepathy", description: "You have a deep understanding of others' feelings and thoughts. Your intuition is your superpower, connecting you deeply with people.", image: "https://images.unsplash.com/photo-1531306151249-5f8f0a40a3f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "Time-Bending Power", description: "You have a unique relationship with time. You are patient, wise, and know how to make every moment count, as if you can slow or speed them up.", image: "https://images.unsplash.com/photo-1495003972234-9a40e689e4b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "Heart-Healing Empathy", description: "You have a powerful healing aura. Your kindness and presence are a soothing balm, bringing peace and comfort to those around you.", image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    travelDestination: {
        id: 'travelDestination',
        title: "What's Your Perfect Travel Spot?",
        description: "Find the dream destination that matches your soul!",
        calculation: 'mostVoted',
        questions: [
            { text: "What would you pack in your suitcase first?", answers: [{ text: "An old map and a magnifying glass.", value: 'A' }, { text: "Swimsuit and sunglasses.", value: 'B' }, { text: "A sturdy pair of hiking boots.", value: 'C' }] },
            { text: "On vacation, you'd rather be...", answers: [{ text: "Exploring ancient ruins and museums.", value: 'A' }, { text: "Lying on a sandy beach with a cool drink.", value: 'B' }, { text: "Climbing a mountain or zip-lining.", value: 'C' }] },
            { text: "What's the perfect vacation souvenir?", answers: [{ text: "A mysterious artifact with a story.", value: 'A' }, { text: "A beautiful seashell or a piece of jewelry.", value: 'B' }, { text: "A cool rock or an amazing photo.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Ancient City of Mysteries", description: "You are a curious soul who loves history and secrets. Your perfect trip is exploring old castles, forgotten temples, and dusty libraries.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Paradise Beach of Relaxation", description: "You are a chill and easygoing person who loves to relax and recharge. Your ideal vacation involves sun, sand, and sparkling blue water.", image: "https://images.unsplash.com/photo-1507525428034-b723a9ce68c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Jungle of Thrilling Adventures", description: "You are a brave and energetic adventurer! Your perfect getaway is filled with excitement, like exploring deep jungles, climbing tall peaks, and discovering new things.", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    }
};

// --- App State --- //
let currentTestId = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// --- Render Functions --- //
function renderTestSelectionScreen() {
    app.innerHTML = `
        <div class="fade-in">
            <h1>Choose Your Test!</h1>
            <div class="test-selection-grid">${Object.keys(tests).map(testId => {
                const test = tests[testId];
                return `<button class="test-select-btn" data-id="${test.id}">
                            <h2>${test.title}</h2>
                            <p>${test.description}</p>
                        </button>`;
            }).join('')}</div>
        </div>
    `;

    document.querySelectorAll('.test-select-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            currentTestId = e.currentTarget.dataset.id;
            renderStartScreen(currentTestId);
        });
    });
}

function renderStartScreen(testId) {
    const test = tests[testId];
    app.innerHTML = `
        <div class="fade-in">
            <h1>${test.title}</h1>
            <p>${test.description}</p>
            <button class="btn" id="start-btn">Start Test</button>
        </div>
    `;
    document.getElementById('start-btn').addEventListener('click', () => startTest(testId));
}

function renderQuestion() {
    const test = tests[currentTestId];
    const question = test.questions[currentQuestionIndex];
    const answersHtml = question.answers.map(answer => 
        `<button class="btn answer-btn" data-value="${answer.value}">${answer.text}</button>`
    ).join('');

    app.innerHTML = `
        <div class="fade-in">
            <h1>${question.text}</h1>
            <div class="answers-grid">${answersHtml}</div>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: ${((currentQuestionIndex) / test.questions.length) * 100}%"></div>
            </div>
        </div>
    `;

    document.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', (e) => selectAnswer(e.target.dataset.value));
    });
}

function renderResult() {
    const test = tests[currentTestId];
    const resultType = calculateResult();
    const result = test.results[resultType];

    app.innerHTML = `
        <div class="fade-in">
            <h1>${result.title}</h1>
            ${result.image ? `<img src="${result.image}" alt="${result.title}" class="result-image">` : ''}
            <p>${result.description}</p>
            <button class="btn" id="restart-btn">Try Again</button>
            <button class="btn" id="home-btn">Back to Home</button>
        </div>
    `;
    document.getElementById('restart-btn').addEventListener('click', () => startTest(currentTestId));
    document.getElementById('home-btn').addEventListener('click', renderTestSelectionScreen);
}

// --- Logic --- //
function startTest(testId) {
    currentTestId = testId;
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
}

function selectAnswer(value) {
    userAnswers.push(value);
    currentQuestionIndex++;
    const test = tests[currentTestId];
    if (currentQuestionIndex < test.questions.length) {
        renderQuestion();
    } else {
        renderResult();
    }
}

function calculateResult() {
    const test = tests[currentTestId];
    if (test.calculation === 'mbti') {
        const counts = userAnswers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});

        const e = counts['E'] || 0;
        const i = counts['I'] || 0;
        const s = counts['S'] || 0;
        const n = counts['N'] || 0;
        const t = counts['T'] || 0;
        const f = counts['F'] || 0;
        const j = counts['J'] || 0;
        const p = counts['P'] || 0;

        return (e >= i ? 'E' : 'I') + (s >= n ? 'S' : 'N') + (t >= f ? 'T' : 'F') + (j >= p ? 'J' : 'P');

    } else { // mostVoted
        const counts = userAnswers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
}

// --- Initial Load ---
renderTestSelectionScreen();
