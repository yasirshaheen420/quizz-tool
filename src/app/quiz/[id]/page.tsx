"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
	Clock,
	Trophy,
	ArrowLeft,
	ArrowRight,
	CheckCircle,
} from "lucide-react";

interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation?: string;
}

interface Quiz {
	id: string;
	title: string;
	description: string;
	difficulty: string;
	questions: Question[];
	timeLimit: number;
	reward: number;
}

const quizData: Record<string, Quiz> = {
	"1": {
		id: "1",
		title: "General Knowledge",
		description: "Test your knowledge across various topics",
		difficulty: "Easy",
		timeLimit: 15,
		reward: 50,
		questions: [
			{
				id: 1,
				question: "What is the capital of France?",
				options: ["London", "Berlin", "Paris", "Madrid"],
				correctAnswer: 2,
				explanation:
					"Paris is the capital and most populous city of France.",
			},
			{
				id: 2,
				question: "Which planet is known as the Red Planet?",
				options: ["Venus", "Mars", "Jupiter", "Saturn"],
				correctAnswer: 1,
				explanation:
					"Mars is called the Red Planet due to its reddish appearance from iron oxide on its surface.",
			},
			{
				id: 3,
				question: "What is the largest mammal in the world?",
				options: [
					"African Elephant",
					"Blue Whale",
					"Giraffe",
					"Polar Bear",
				],
				correctAnswer: 1,
				explanation:
					"The Blue Whale is the largest mammal and the largest animal ever known to have lived on Earth.",
			},
			{
				id: 4,
				question: "In which year did World War II end?",
				options: ["1944", "1945", "1946", "1947"],
				correctAnswer: 1,
				explanation:
					"World War II ended in 1945 with the surrender of Japan in September.",
			},
			{
				id: 5,
				question: "What is the chemical symbol for gold?",
				options: ["Go", "Gd", "Au", "Ag"],
				correctAnswer: 2,
				explanation:
					"Au is the chemical symbol for gold, derived from the Latin word 'aurum'.",
			},
			{
				id: 6,
				question: "Which ocean is the largest?",
				options: ["Atlantic", "Indian", "Arctic", "Pacific"],
				correctAnswer: 3,
				explanation:
					"The Pacific Ocean is the largest and deepest ocean on Earth.",
			},
			{
				id: 7,
				question: "Who painted the Mona Lisa?",
				options: [
					"Vincent van Gogh",
					"Pablo Picasso",
					"Leonardo da Vinci",
					"Michelangelo",
				],
				correctAnswer: 2,
				explanation:
					"The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.",
			},
			{
				id: 8,
				question: "What is the smallest country in the world?",
				options: [
					"Monaco",
					"Vatican City",
					"San Marino",
					"Liechtenstein",
				],
				correctAnswer: 1,
				explanation:
					"Vatican City is the smallest country in the world by both area and population.",
			},
			{
				id: 9,
				question: "Which element has the atomic number 1?",
				options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
				correctAnswer: 1,
				explanation:
					"Hydrogen has the atomic number 1, making it the lightest and most abundant element in the universe.",
			},
			{
				id: 10,
				question: "What is the longest river in the world?",
				options: [
					"Amazon River",
					"Nile River",
					"Yangtze River",
					"Mississippi River",
				],
				correctAnswer: 1,
				explanation:
					"The Nile River is traditionally considered the longest river in the world at approximately 6,650 km.",
			},
		],
	},
	"2": {
		id: "2",
		title: "Science & Technology",
		description: "Explore the world of science and tech",
		difficulty: "Medium",
		timeLimit: 18,
		reward: 75,
		questions: [
			{
				id: 1,
				question: "What does CPU stand for?",
				options: [
					"Central Processing Unit",
					"Computer Personal Unit",
					"Central Program Unit",
					"Computer Processing Unit",
				],
				correctAnswer: 0,
				explanation:
					"CPU stands for Central Processing Unit, the main component that executes instructions in a computer.",
			},
			{
				id: 2,
				question: "What is the speed of light in vacuum?",
				options: [
					"299,792,458 m/s",
					"300,000,000 m/s",
					"299,000,000 m/s",
					"298,792,458 m/s",
				],
				correctAnswer: 0,
				explanation:
					"The speed of light in vacuum is exactly 299,792,458 meters per second.",
			},
			{
				id: 3,
				question:
					"Which programming language was developed by James Gosling?",
				options: ["Python", "Java", "C++", "JavaScript"],
				correctAnswer: 1,
				explanation:
					"Java was developed by James Gosling at Sun Microsystems in the mid-1990s.",
			},
			{
				id: 4,
				question:
					"What is the most abundant gas in Earth's atmosphere?",
				options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
				correctAnswer: 2,
				explanation:
					"Nitrogen makes up about 78% of Earth's atmosphere.",
			},
			{
				id: 5,
				question: "What does DNA stand for?",
				options: [
					"Deoxyribonucleic Acid",
					"Deoxyribose Nucleic Acid",
					"Deoxy Nucleic Acid",
					"Deoxyribonuclear Acid",
				],
				correctAnswer: 0,
				explanation:
					"DNA stands for Deoxyribonucleic Acid, which carries genetic information in living organisms.",
			},
			{
				id: 6,
				question: "Which planet has the most moons?",
				options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
				correctAnswer: 1,
				explanation:
					"Saturn has the most confirmed moons with over 80 natural satellites.",
			},
			{
				id: 7,
				question: "What is the hardest natural substance on Earth?",
				options: ["Quartz", "Diamond", "Graphite", "Titanium"],
				correctAnswer: 1,
				explanation:
					"Diamond is the hardest natural substance on Earth, rating 10 on the Mohs scale.",
			},
			{
				id: 8,
				question: "Who developed the theory of relativity?",
				options: [
					"Isaac Newton",
					"Albert Einstein",
					"Stephen Hawking",
					"Niels Bohr",
				],
				correctAnswer: 1,
				explanation:
					"Albert Einstein developed both the special and general theories of relativity.",
			},
			{
				id: 9,
				question: "What is the chemical formula for water?",
				options: ["H2O", "CO2", "NaCl", "CH4"],
				correctAnswer: 0,
				explanation:
					"Water has the chemical formula H2O, consisting of two hydrogen atoms and one oxygen atom.",
			},
			{
				id: 10,
				question: "Which technology company was founded by Bill Gates?",
				options: ["Apple", "Google", "Microsoft", "IBM"],
				correctAnswer: 2,
				explanation:
					"Microsoft was co-founded by Bill Gates and Paul Allen in 1975.",
			},
			{
				id: 11,
				question: "What is the unit of electric current?",
				options: ["Volt", "Ampere", "Ohm", "Watt"],
				correctAnswer: 1,
				explanation:
					"The ampere (A) is the unit of electric current in the International System of Units.",
			},
			{
				id: 12,
				question: "Which organ in the human body produces insulin?",
				options: ["Liver", "Kidney", "Pancreas", "Heart"],
				correctAnswer: 2,
				explanation:
					"The pancreas produces insulin, which regulates blood sugar levels.",
			},
		],
	},
	"3": {
		id: "3",
		title: "World History",
		description: "Journey through historical events",
		difficulty: "Hard",
		timeLimit: 20,
		reward: 100,
		questions: [
			{
				id: 1,
				question: "In which year did the Berlin Wall fall?",
				options: ["1987", "1988", "1989", "1990"],
				correctAnswer: 2,
				explanation:
					"The Berlin Wall fell on November 9, 1989, marking the beginning of German reunification.",
			},
			{
				id: 2,
				question: "Who was the first Emperor of Rome?",
				options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
				correctAnswer: 1,
				explanation:
					"Augustus (originally named Octavian) was the first Roman Emperor, ruling from 27 BC to 14 AD.",
			},
			{
				id: 3,
				question:
					"Which ancient wonder of the world was located in Alexandria?",
				options: [
					"Colossus of Rhodes",
					"Lighthouse of Alexandria",
					"Hanging Gardens",
					"Temple of Artemis",
				],
				correctAnswer: 1,
				explanation:
					"The Lighthouse of Alexandria (Pharos of Alexandria) was one of the Seven Wonders of the Ancient World.",
			},
			{
				id: 4,
				question:
					"The Hundred Years' War was fought between which two countries?",
				options: [
					"England and France",
					"Spain and Portugal",
					"Germany and Austria",
					"Italy and Greece",
				],
				correctAnswer: 0,
				explanation:
					"The Hundred Years' War (1337-1453) was fought between England and France.",
			},
			{
				id: 5,
				question: "Who was known as the 'Iron Lady'?",
				options: [
					"Queen Elizabeth I",
					"Margaret Thatcher",
					"Golda Meir",
					"Indira Gandhi",
				],
				correctAnswer: 1,
				explanation:
					"Margaret Thatcher, the British Prime Minister from 1979-1990, was known as the 'Iron Lady'.",
			},
			{
				id: 6,
				question: "Which empire was ruled by Genghis Khan?",
				options: [
					"Ottoman Empire",
					"Mongol Empire",
					"Byzantine Empire",
					"Persian Empire",
				],
				correctAnswer: 1,
				explanation:
					"Genghis Khan founded and ruled the Mongol Empire, the largest contiguous empire in history.",
			},
			{
				id: 7,
				question: "The Renaissance began in which country?",
				options: ["France", "Germany", "Italy", "England"],
				correctAnswer: 2,
				explanation:
					"The Renaissance began in Italy during the 14th century, starting in cities like Florence.",
			},
			{
				id: 8,
				question: "Which pharaoh built the Great Pyramid of Giza?",
				options: ["Tutankhamun", "Ramesses II", "Khufu", "Cleopatra"],
				correctAnswer: 2,
				explanation:
					"The Great Pyramid of Giza was built for Pharaoh Khufu (also known as Cheops) around 2580-2560 BC.",
			},
			{
				id: 9,
				question: "The Treaty of Versailles ended which war?",
				options: [
					"World War I",
					"World War II",
					"Franco-Prussian War",
					"Napoleonic Wars",
				],
				correctAnswer: 0,
				explanation:
					"The Treaty of Versailles was signed in 1919, officially ending World War I.",
			},
			{
				id: 10,
				question: "Who was the last Tsar of Russia?",
				options: [
					"Alexander III",
					"Nicholas II",
					"Peter the Great",
					"Ivan the Terrible",
				],
				correctAnswer: 1,
				explanation:
					"Nicholas II was the last Tsar of Russia, ruling from 1894 until his abdication in 1917.",
			},
			{
				id: 11,
				question:
					"The ancient city of Carthage was located in present-day:",
				options: ["Libya", "Tunisia", "Algeria", "Morocco"],
				correctAnswer: 1,
				explanation:
					"Ancient Carthage was located in present-day Tunisia, near modern-day Tunis.",
			},
			{
				id: 12,
				question: "Which explorer first reached the South Pole?",
				options: [
					"Ernest Shackleton",
					"Robert Falcon Scott",
					"Roald Amundsen",
					"Richard Byrd",
				],
				correctAnswer: 2,
				explanation:
					"Norwegian explorer Roald Amundsen was the first to reach the South Pole on December 14, 1911.",
			},
			{
				id: 13,
				question: "The Silk Road connected which two regions?",
				options: [
					"Europe and Africa",
					"Asia and Europe",
					"Asia and America",
					"Europe and America",
				],
				correctAnswer: 1,
				explanation:
					"The Silk Road was an ancient network of trade routes connecting Asia and Europe.",
			},
			{
				id: 14,
				question: "Which civilization built Machu Picchu?",
				options: ["Aztec", "Maya", "Inca", "Olmec"],
				correctAnswer: 2,
				explanation:
					"Machu Picchu was built by the Inca civilization in the 15th century.",
			},
			{
				id: 15,
				question: "The Black Death occurred during which century?",
				options: [
					"13th century",
					"14th century",
					"15th century",
					"16th century",
				],
				correctAnswer: 1,
				explanation:
					"The Black Death (bubonic plague) devastated Europe during the 14th century (1347-1351).",
			},
		],
	},
	"4": {
		id: "4",
		title: "Literature & Authors",
		description: "Dive into the world of books",
		difficulty: "Hard",
		timeLimit: 22,
		reward: 95,
		questions: [
			{
				id: 1,
				question: "Who wrote 'To Kill a Mockingbird'?",
				options: [
					"Harper Lee",
					"Toni Morrison",
					"Maya Angelou",
					"Flannery O'Connor",
				],
				correctAnswer: 0,
				explanation:
					"Harper Lee wrote To Kill a Mockingbird, published in 1960, which won the Pulitzer Prize for Fiction.",
			},
			{
				id: 2,
				question:
					"Which Shakespeare play features the characters Romeo and Juliet?",
				options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
				correctAnswer: 2,
				explanation:
					"Romeo and Juliet is one of Shakespeare's most famous tragedies about young star-crossed lovers.",
			},
			{
				id: 3,
				question: "Who wrote '1984'?",
				options: [
					"Aldous Huxley",
					"George Orwell",
					"Ray Bradbury",
					"Kurt Vonnegut",
				],
				correctAnswer: 1,
				explanation:
					"George Orwell wrote 1984, a dystopian novel published in 1949.",
			},
			{
				id: 4,
				question:
					"Which novel begins with 'It was the best of times, it was the worst of times'?",
				options: [
					"Great Expectations",
					"A Tale of Two Cities",
					"Oliver Twist",
					"David Copperfield",
				],
				correctAnswer: 1,
				explanation:
					"This famous opening line is from Charles Dickens' A Tale of Two Cities.",
			},
			{
				id: 5,
				question: "Who wrote 'Pride and Prejudice'?",
				options: [
					"Charlotte Brontë",
					"Emily Brontë",
					"Jane Austen",
					"George Eliot",
				],
				correctAnswer: 2,
				explanation:
					"Jane Austen wrote Pride and Prejudice, published in 1813.",
			},
			{
				id: 6,
				question:
					"Which author created the detective character Sherlock Holmes?",
				options: [
					"Agatha Christie",
					"Arthur Conan Doyle",
					"Edgar Allan Poe",
					"Raymond Chandler",
				],
				correctAnswer: 1,
				explanation:
					"Sir Arthur Conan Doyle created Sherlock Holmes, first appearing in A Study in Scarlet (1887).",
			},
			{
				id: 7,
				question: "What is the first book in the Harry Potter series?",
				options: [
					"Chamber of Secrets",
					"Philosopher's Stone",
					"Prisoner of Azkaban",
					"Goblet of Fire",
				],
				correctAnswer: 1,
				explanation:
					"Harry Potter and the Philosopher's Stone (Sorcerer's Stone in the US) is the first book in the series.",
			},
			{
				id: 8,
				question: "Who wrote 'The Great Gatsby'?",
				options: [
					"Ernest Hemingway",
					"F. Scott Fitzgerald",
					"John Steinbeck",
					"William Faulkner",
				],
				correctAnswer: 1,
				explanation:
					"F. Scott Fitzgerald wrote The Great Gatsby, published in 1925.",
			},
			{
				id: 9,
				question: "Which poet wrote 'The Road Not Taken'?",
				options: [
					"Walt Whitman",
					"Emily Dickinson",
					"Robert Frost",
					"Langston Hughes",
				],
				correctAnswer: 2,
				explanation:
					"Robert Frost wrote 'The Road Not Taken,' one of the most famous American poems.",
			},
			{
				id: 10,
				question: "Who wrote 'One Hundred Years of Solitude'?",
				options: [
					"Gabriel García Márquez",
					"Mario Vargas Llosa",
					"Jorge Luis Borges",
					"Octavio Paz",
				],
				correctAnswer: 0,
				explanation:
					"Gabriel García Márquez wrote One Hundred Years of Solitude, a masterpiece of magical realism.",
			},
		],
	},

	"5": {
		id: "5",
		title: "Food & Cuisine",
		description: "A delicious journey around the world",
		difficulty: "Easy",
		timeLimit: 12,
		reward: 45,
		questions: [
			{
				id: 1,
				question: "Which country is famous for inventing pizza?",
				options: ["France", "Italy", "Greece", "Spain"],
				correctAnswer: 1,
				explanation:
					"Pizza originated in Italy, specifically in Naples, during the 18th century.",
			},
			{
				id: 2,
				question: "What is the main ingredient in guacamole?",
				options: ["Tomato", "Avocado", "Onion", "Lime"],
				correctAnswer: 1,
				explanation:
					"Avocado is the main ingredient in guacamole, a traditional Mexican dip.",
			},
			{
				id: 3,
				question:
					"Which spice is known as the most expensive spice in the world?",
				options: ["Vanilla", "Cardamom", "Saffron", "Black Pepper"],
				correctAnswer: 2,
				explanation:
					"Saffron is the most expensive spice, derived from the flower of Crocus sativus.",
			},
			{
				id: 4,
				question: "What type of pastry is used to make profiteroles?",
				options: [
					"Puff pastry",
					"Shortcrust pastry",
					"Choux pastry",
					"Filo pastry",
				],
				correctAnswer: 2,
				explanation:
					"Profiteroles are made from choux pastry, which puffs up when baked.",
			},
			{
				id: 5,
				question: "Which country is the origin of sushi?",
				options: ["China", "Korea", "Thailand", "Japan"],
				correctAnswer: 3,
				explanation:
					"Sushi originated in Japan, though it evolved from an ancient Chinese preservation method.",
			},
			{
				id: 6,
				question: "What is the main alcohol in a Mojito?",
				options: ["Vodka", "Gin", "Rum", "Tequila"],
				correctAnswer: 2,
				explanation:
					"A Mojito is made with white rum, lime juice, sugar, soda water, and mint.",
			},
			{
				id: 7,
				question:
					"Which vegetable is the main ingredient in baba ganoush?",
				options: ["Zucchini", "Eggplant", "Cucumber", "Tomato"],
				correctAnswer: 1,
				explanation:
					"Baba ganoush is a Middle Eastern dip made primarily from roasted eggplant.",
			},
			{
				id: 8,
				question: "What does 'al dente' mean in cooking?",
				options: [
					"Very soft",
					"Firm to the bite",
					"Fully cooked",
					"Raw",
				],
				correctAnswer: 1,
				explanation:
					"Al dente is an Italian term meaning 'to the tooth,' describing pasta that is firm to the bite.",
			},
		],
	},

	"6": {
		id: "6",
		title: "Art & Artists",
		description: "Discover masterpieces and creators",
		difficulty: "Medium",
		timeLimit: 19,
		reward: 80,
		questions: [
			{
				id: 1,
				question: "Who painted 'The Starry Night'?",
				options: [
					"Claude Monet",
					"Vincent van Gogh",
					"Pablo Picasso",
					"Leonardo da Vinci",
				],
				correctAnswer: 1,
				explanation:
					"Vincent van Gogh painted The Starry Night in 1889 while at the Saint-Paul-de-Mausole asylum.",
			},
			{
				id: 2,
				question: "Which artist is famous for painting melting clocks?",
				options: [
					"René Magritte",
					"Salvador Dalí",
					"Max Ernst",
					"Joan Miró",
				],
				correctAnswer: 1,
				explanation:
					"Salvador Dalí painted 'The Persistence of Memory' featuring the famous melting clocks.",
			},
			{
				id: 3,
				question: "Where is the Mona Lisa currently displayed?",
				options: [
					"British Museum",
					"Metropolitan Museum",
					"Louvre Museum",
					"Uffizi Gallery",
				],
				correctAnswer: 2,
				explanation:
					"The Mona Lisa is housed in the Louvre Museum in Paris, France.",
			},
			{
				id: 4,
				question:
					"Which art movement was Pablo Picasso associated with?",
				options: [
					"Impressionism",
					"Cubism",
					"Surrealism",
					"Expressionism",
				],
				correctAnswer: 1,
				explanation:
					"Pablo Picasso co-founded Cubism with Georges Braque in the early 20th century.",
			},
			{
				id: 5,
				question: "Who sculpted 'David'?",
				options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
				correctAnswer: 1,
				explanation:
					"Michelangelo sculpted the famous statue of David between 1501 and 1504.",
			},
			{
				id: 6,
				question: "Which artist cut off his own ear?",
				options: [
					"Paul Gauguin",
					"Vincent van Gogh",
					"Henri Toulouse-Lautrec",
					"Edgar Degas",
				],
				correctAnswer: 1,
				explanation:
					"Vincent van Gogh famously cut off part of his ear in 1888 during a mental breakdown.",
			},
			{
				id: 7,
				question: "What technique did Jackson Pollock pioneer?",
				options: [
					"Pointillism",
					"Action painting",
					"Pop art",
					"Minimalism",
				],
				correctAnswer: 1,
				explanation:
					"Jackson Pollock pioneered action painting, creating works by dripping and splashing paint.",
			},
			{
				id: 8,
				question: "Which museum houses 'The Scream' by Edvard Munch?",
				options: [
					"National Gallery London",
					"MoMA",
					"National Gallery Oslo",
					"Tate Modern",
				],
				correctAnswer: 2,
				explanation:
					"The original version of 'The Scream' is housed in the National Gallery in Oslo, Norway.",
			},
		],
	},

	"7": {
		id: "7",
		title: "Music & Musicians",
		description: "Feel the rhythm of knowledge",
		difficulty: "Medium",
		timeLimit: 16,
		reward: 65,
		questions: [
			{
				id: 1,
				question: "Which instrument has 88 keys?",
				options: ["Organ", "Piano", "Harpsichord", "Accordion"],
				correctAnswer: 1,
				explanation:
					"A standard piano has 88 keys - 52 white keys and 36 black keys.",
			},
			{
				id: 2,
				question: "Who composed 'The Four Seasons'?",
				options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
				correctAnswer: 2,
				explanation:
					"Antonio Vivaldi composed 'The Four Seasons,' a set of four violin concertos.",
			},
			{
				id: 3,
				question: "Which band released the album 'Abbey Road'?",
				options: [
					"The Rolling Stones",
					"The Beatles",
					"Led Zeppelin",
					"The Who",
				],
				correctAnswer: 1,
				explanation:
					"The Beatles released Abbey Road in 1969, their penultimate studio album.",
			},
			{
				id: 4,
				question: "What does 'forte' mean in music?",
				options: ["Slow", "Fast", "Loud", "Soft"],
				correctAnswer: 2,
				explanation:
					"Forte (f) is a dynamic marking in music that means to play loudly.",
			},
			{
				id: 5,
				question:
					"Which string instrument is the largest in the violin family?",
				options: ["Violin", "Viola", "Cello", "Double bass"],
				correctAnswer: 3,
				explanation:
					"The double bass (or upright bass) is the largest and lowest-pitched instrument in the violin family.",
			},
			{
				id: 6,
				question: "Who was known as the 'King of Pop'?",
				options: [
					"Elvis Presley",
					"Michael Jackson",
					"Prince",
					"David Bowie",
				],
				correctAnswer: 1,
				explanation:
					"Michael Jackson was known as the 'King of Pop' for his contributions to music and dance.",
			},
			{
				id: 7,
				question: "How many strings does a standard guitar have?",
				options: ["4", "5", "6", "7"],
				correctAnswer: 2,
				explanation:
					"A standard acoustic or electric guitar has 6 strings.",
			},
			{
				id: 8,
				question: "Which genre of music originated in New Orleans?",
				options: ["Blues", "Jazz", "Country", "Rock"],
				correctAnswer: 1,
				explanation:
					"Jazz music originated in New Orleans in the late 19th and early 20th centuries.",
			},
		],
	},

	"8": {
		id: "8",
		title: "Animals & Nature",
		description: "Explore the natural world",
		difficulty: "Easy",
		timeLimit: 14,
		reward: 55,
		questions: [
			{
				id: 1,
				question: "What is the largest mammal in the world?",
				options: [
					"African Elephant",
					"Blue Whale",
					"Giraffe",
					"Hippopotamus",
				],
				correctAnswer: 1,
				explanation:
					"The blue whale is the largest mammal and the largest animal ever known to have lived on Earth.",
			},
			{
				id: 2,
				question: "How many legs does a spider have?",
				options: ["6", "8", "10", "12"],
				correctAnswer: 1,
				explanation:
					"All spiders have 8 legs, which distinguishes them from insects that have 6 legs.",
			},
			{
				id: 3,
				question: "Which animal is known for changing colors?",
				options: [
					"Chameleon",
					"Octopus",
					"Cuttlefish",
					"All of the above",
				],
				correctAnswer: 3,
				explanation:
					"Chameleons, octopuses, and cuttlefish can all change colors for camouflage or communication.",
			},
			{
				id: 4,
				question: "What do pandas primarily eat?",
				options: ["Fish", "Bamboo", "Fruits", "Insects"],
				correctAnswer: 1,
				explanation:
					"Giant pandas eat almost exclusively bamboo, which makes up 99% of their diet.",
			},
			{
				id: 5,
				question: "Which bird cannot fly?",
				options: ["Eagle", "Penguin", "Hawk", "Owl"],
				correctAnswer: 1,
				explanation:
					"Penguins cannot fly but are excellent swimmers, using their wings as flippers.",
			},
			{
				id: 6,
				question: "What is a group of lions called?",
				options: ["Pack", "Herd", "Pride", "Flock"],
				correctAnswer: 2,
				explanation:
					"A group of lions is called a pride, typically consisting of related females and their cubs.",
			},
			{
				id: 7,
				question: "Which animal is the fastest land animal?",
				options: ["Lion", "Cheetah", "Leopard", "Horse"],
				correctAnswer: 1,
				explanation:
					"The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph.",
			},
			{
				id: 8,
				question: "How many chambers does a human heart have?",
				options: ["2", "3", "4", "5"],
				correctAnswer: 2,
				explanation:
					"The human heart has 4 chambers: two atria and two ventricles.",
			},
		],
	},

	"9": {
		id: "9",
		title: "Space & Astronomy",
		description: "Journey through the cosmos",
		difficulty: "Hard",
		timeLimit: 21,
		reward: 90,
		questions: [
			{
				id: 1,
				question: "Which planet is closest to the Sun?",
				options: ["Venus", "Earth", "Mercury", "Mars"],
				correctAnswer: 2,
				explanation:
					"Mercury is the closest planet to the Sun, orbiting at an average distance of 36 million miles.",
			},
			{
				id: 2,
				question: "What is the name of our galaxy?",
				options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
				correctAnswer: 1,
				explanation:
					"Our galaxy is called the Milky Way, containing billions of stars including our Sun.",
			},
			{
				id: 3,
				question: "Who was the first person to walk on the moon?",
				options: [
					"Buzz Aldrin",
					"Neil Armstrong",
					"John Glenn",
					"Alan Shepard",
				],
				correctAnswer: 1,
				explanation:
					"Neil Armstrong was the first person to walk on the moon on July 20, 1969.",
			},
			{
				id: 4,
				question:
					"How long does it take for light from the Sun to reach Earth?",
				options: ["8 minutes", "1 hour", "1 day", "1 week"],
				correctAnswer: 0,
				explanation:
					"Light from the Sun takes approximately 8 minutes and 20 seconds to reach Earth.",
			},
			{
				id: 5,
				question: "Which planet has the Great Red Spot?",
				options: ["Mars", "Jupiter", "Saturn", "Neptune"],
				correctAnswer: 1,
				explanation:
					"Jupiter has the Great Red Spot, a giant storm that has been raging for hundreds of years.",
			},
			{
				id: 6,
				question: "What is the hottest planet in our solar system?",
				options: ["Mercury", "Venus", "Mars", "Earth"],
				correctAnswer: 1,
				explanation:
					"Venus is the hottest planet with surface temperatures around 900°F due to its thick atmosphere.",
			},
			{
				id: 7,
				question:
					"Which space agency launched the Hubble Space Telescope?",
				options: ["ESA", "NASA", "JAXA", "Roscosmos"],
				correctAnswer: 1,
				explanation:
					"NASA launched the Hubble Space Telescope in 1990, revolutionizing our view of the universe.",
			},
			{
				id: 8,
				question: "What is a supernova?",
				options: [
					"A new star",
					"An exploding star",
					"A black hole",
					"A planet",
				],
				correctAnswer: 1,
				explanation:
					"A supernova is the explosive death of a massive star, releasing enormous amounts of energy.",
			},
		],
	},

	"10": {
		id: "10",
		title: "Mythology & Legends",
		description: "Ancient stories and gods",
		difficulty: "Medium",
		timeLimit: 18,
		reward: 75,
		questions: [
			{
				id: 1,
				question: "Who is the king of the gods in Greek mythology?",
				options: ["Poseidon", "Hades", "Zeus", "Apollo"],
				correctAnswer: 2,
				explanation:
					"Zeus is the king of the gods in Greek mythology, ruler of Mount Olympus and god of the sky.",
			},
			{
				id: 2,
				question:
					"What creature has the head of a human and the body of a lion?",
				options: ["Centaur", "Minotaur", "Sphinx", "Griffin"],
				correctAnswer: 2,
				explanation:
					"The Sphinx has a human head and a lion's body, famous from Egyptian and Greek mythology.",
			},
			{
				id: 3,
				question:
					"In Norse mythology, what is the name of Thor's hammer?",
				options: ["Gungnir", "Mjolnir", "Gram", "Laevateinn"],
				correctAnswer: 1,
				explanation:
					"Mjolnir is Thor's hammer in Norse mythology, capable of leveling mountains.",
			},
			{
				id: 4,
				question: "Who is the Roman equivalent of the Greek god Zeus?",
				options: ["Mars", "Jupiter", "Neptune", "Mercury"],
				correctAnswer: 1,
				explanation:
					"Jupiter is the Roman equivalent of Zeus, king of the gods and ruler of the sky.",
			},
			{
				id: 5,
				question: "Which Greek hero had to complete 12 labors?",
				options: ["Perseus", "Theseus", "Hercules", "Achilles"],
				correctAnswer: 2,
				explanation:
					"Hercules (Heracles in Greek) was forced to complete 12 labors as punishment for killing his family.",
			},
			{
				id: 6,
				question: "What is the name of Odin's eight-legged horse?",
				options: ["Fenrir", "Sleipnir", "Jormungandr", "Huginn"],
				correctAnswer: 1,
				explanation:
					"Sleipnir is Odin's eight-legged horse in Norse mythology, capable of traveling between worlds.",
			},
			{
				id: 7,
				question:
					"Which goddess is associated with wisdom in Greek mythology?",
				options: ["Aphrodite", "Hera", "Athena", "Artemis"],
				correctAnswer: 2,
				explanation:
					"Athena is the Greek goddess of wisdom, warfare, and handicrafts.",
			},
			{
				id: 8,
				question: "What was Pandora's Box originally?",
				options: ["A box", "A jar", "A chest", "A bag"],
				correctAnswer: 1,
				explanation:
					"In the original Greek myth, Pandora's 'box' was actually a large jar (pithos).",
			},
		],
	},

	"11": {
		id: "11",
		title: "Mathematics & Logic",
		description: "Exercise your logical thinking",
		difficulty: "Hard",
		timeLimit: 25,
		reward: 110,
		questions: [
			{
				id: 1,
				question: "What is the value of π (pi) to two decimal places?",
				options: ["3.14", "3.15", "3.16", "3.17"],
				correctAnswer: 0,
				explanation:
					"Pi (π) is approximately 3.14159, so to two decimal places it's 3.14.",
			},
			{
				id: 2,
				question: "What is 15% of 200?",
				options: ["25", "30", "35", "40"],
				correctAnswer: 1,
				explanation: "15% of 200 = 0.15 × 200 = 30.",
			},
			{
				id: 3,
				question: "What is the square root of 144?",
				options: ["11", "12", "13", "14"],
				correctAnswer: 1,
				explanation:
					"The square root of 144 is 12, because 12 × 12 = 144.",
			},
			{
				id: 4,
				question:
					"In a right triangle, what is the longest side called?",
				options: ["Adjacent", "Opposite", "Hypotenuse", "Base"],
				correctAnswer: 2,
				explanation:
					"The hypotenuse is the longest side of a right triangle, opposite the right angle.",
			},
			{
				id: 5,
				question:
					"What is the next number in the sequence: 2, 4, 8, 16, ...?",
				options: ["24", "32", "30", "28"],
				correctAnswer: 1,
				explanation:
					"This is a geometric sequence where each number is doubled: 16 × 2 = 32.",
			},
			{
				id: 6,
				question: "What is the area of a circle with radius 5?",
				options: ["25π", "10π", "15π", "20π"],
				correctAnswer: 0,
				explanation:
					"The area of a circle is πr², so with radius 5: π × 5² = 25π.",
			},
			{
				id: 7,
				question: "What is 7! (7 factorial)?",
				options: ["49", "343", "5040", "7"],
				correctAnswer: 2,
				explanation: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040.",
			},
			{
				id: 8,
				question: "If x + 5 = 12, what is x?",
				options: ["6", "7", "8", "9"],
				correctAnswer: 1,
				explanation:
					"To solve x + 5 = 12, subtract 5 from both sides: x = 12 - 5 = 7.",
			},
		],
	},

	"12": {
		id: "12",
		title: "Pop Culture & Trends",
		description: "Stay current with popular culture",
		difficulty: "Easy",
		timeLimit: 13,
		reward: 50,
		questions: [
			{
				id: 1,
				question:
					"Which social media platform is known for 280-character messages?",
				options: ["Facebook", "Instagram", "Twitter/X", "TikTok"],
				correctAnswer: 2,
				explanation:
					"Twitter (now X) is famous for its character limit, originally 140, then expanded to 280 characters.",
			},
			{
				id: 2,
				question: "What does 'viral' mean in internet culture?",
				options: [
					"Infected with virus",
					"Very popular content",
					"Deleted content",
					"Private content",
				],
				correctAnswer: 1,
				explanation:
					"In internet culture, 'viral' refers to content that spreads rapidly and becomes very popular online.",
			},
			{
				id: 3,
				question: "Which app is known for short-form video content?",
				options: ["YouTube", "TikTok", "Instagram", "Snapchat"],
				correctAnswer: 1,
				explanation:
					"TikTok is primarily known for short-form video content, typically 15 seconds to 3 minutes long.",
			},
			{
				id: 4,
				question: "What does 'meme' refer to in internet culture?",
				options: [
					"A type of virus",
					"Shareable cultural content",
					"A programming language",
					"A website",
				],
				correctAnswer: 1,
				explanation:
					"A meme is a piece of media that spreads rapidly online, often humorous or relatable content.",
			},
			{
				id: 5,
				question: "Which streaming platform created 'The Crown'?",
				options: ["Netflix", "Amazon Prime", "Disney+", "HBO Max"],
				correctAnswer: 0,
				explanation:
					"The Crown is a Netflix original series about the British royal family.",
			},
			{
				id: 6,
				question: "What does 'FOMO' stand for?",
				options: [
					"Fear of Missing Out",
					"First of Many Options",
					"Follow Me Online",
					"Find Our Main Office",
				],
				correctAnswer: 0,
				explanation:
					"FOMO stands for Fear of Missing Out, anxiety about missing exciting experiences.",
			},
			{
				id: 7,
				question: "Which celebrity couple was nicknamed 'Brangelina'?",
				options: [
					"Brad Pitt & Angelina Jolie",
					"Ben Affleck & Jennifer Lopez",
					"Bradley Cooper & Lady Gaga",
					"Ryan Reynolds & Blake Lively",
				],
				correctAnswer: 0,
				explanation:
					"Brad Pitt and Angelina Jolie were nicknamed 'Brangelina' during their relationship.",
			},
			{
				id: 8,
				question: "What does 'stan' mean in pop culture?",
				options: [
					"To stand up",
					"To be a superfan",
					"To criticize",
					"To ignore",
				],
				correctAnswer: 1,
				explanation:
					"To 'stan' someone means to be an extremely devoted fan, derived from Eminem's song 'Stan.'",
			},
		],
	},

	"13": {
		id: "13",
		title: "Languages & Communication",
		description: "Words that connect the world",
		difficulty: "Medium",
		timeLimit: 17,
		reward: 70,
		questions: [
			{
				id: 1,
				question: "Which language has the most native speakers?",
				options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
				correctAnswer: 2,
				explanation:
					"Mandarin Chinese has the most native speakers, with over 900 million people speaking it as their first language.",
			},
			{
				id: 2,
				question: "What does 'bonjour' mean in English?",
				options: ["Goodbye", "Hello", "Thank you", "Please"],
				correctAnswer: 1,
				explanation: "Bonjour is French for 'hello' or 'good day.'",
			},
			{
				id: 3,
				question: "Which alphabet has the most letters?",
				options: ["English", "Arabic", "Khmer", "Russian"],
				correctAnswer: 2,
				explanation:
					"The Khmer alphabet has 74 letters, making it the alphabet with the most letters.",
			},
			{
				id: 4,
				question: "What does 'sayonara' mean?",
				options: ["Hello", "Goodbye", "Thank you", "Excuse me"],
				correctAnswer: 1,
				explanation:
					"Sayonara is Japanese for 'goodbye,' typically used for long-term farewells.",
			},
			{
				id: 5,
				question: "Which language is spoken in Brazil?",
				options: ["Spanish", "Portuguese", "Italian", "French"],
				correctAnswer: 1,
				explanation:
					"Portuguese is the official language of Brazil, spoken by over 200 million people there.",
			},
			{
				id: 6,
				question: "What does 'etymology' study?",
				options: ["Insects", "Word origins", "Stars", "Plants"],
				correctAnswer: 1,
				explanation:
					"Etymology is the study of the origin and historical development of words.",
			},
			{
				id: 7,
				question: "Which writing system reads from right to left?",
				options: ["Latin", "Arabic", "Chinese", "Korean"],
				correctAnswer: 1,
				explanation:
					"Arabic is written from right to left, as are Hebrew and several other languages.",
			},
			{
				id: 8,
				question: "What is a 'polyglot'?",
				options: [
					"A type of bird",
					"Someone who speaks multiple languages",
					"A musical instrument",
					"A type of food",
				],
				correctAnswer: 1,
				explanation:
					"A polyglot is a person who knows and is able to use several languages.",
			},
		],
	},

	"14": {
		id: "14",
		title: "Inventions & Discoveries",
		description: "Breakthroughs that changed the world",
		difficulty: "Medium",
		timeLimit: 19,
		reward: 80,
		questions: [
			{
				id: 1,
				question: "Who invented the telephone?",
				options: [
					"Thomas Edison",
					"Alexander Graham Bell",
					"Nikola Tesla",
					"Benjamin Franklin",
				],
				correctAnswer: 1,
				explanation:
					"Alexander Graham Bell is credited with inventing the telephone and made the first phone call in 1876.",
			},
			{
				id: 2,
				question: "Which scientist discovered penicillin?",
				options: [
					"Marie Curie",
					"Alexander Fleming",
					"Louis Pasteur",
					"Robert Koch",
				],
				correctAnswer: 1,
				explanation:
					"Alexander Fleming discovered penicillin in 1928, revolutionizing medicine and saving millions of lives.",
			},
			{
				id: 3,
				question: "Who invented the World Wide Web?",
				options: [
					"Bill Gates",
					"Steve Jobs",
					"Tim Berners-Lee",
					"Mark Zuckerberg",
				],
				correctAnswer: 2,
				explanation:
					"Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.",
			},
			{
				id: 4,
				question: "Which brothers invented the airplane?",
				options: [
					"Wright Brothers",
					"Warner Brothers",
					"Grimm Brothers",
					"Mayo Brothers",
				],
				correctAnswer: 0,
				explanation:
					"Orville and Wilbur Wright achieved the first powered flight on December 17, 1903.",
			},
			{
				id: 5,
				question: "Who invented the printing press?",
				options: [
					"Leonardo da Vinci",
					"Johannes Gutenberg",
					"Galileo Galilei",
					"Isaac Newton",
				],
				correctAnswer: 1,
				explanation:
					"Johannes Gutenberg invented the printing press around 1440, revolutionizing the spread of knowledge.",
			},
			{
				id: 6,
				question: "Which scientist developed the theory of evolution?",
				options: [
					"Charles Darwin",
					"Gregor Mendel",
					"Alfred Wallace",
					"Jean-Baptiste Lamarck",
				],
				correctAnswer: 0,
				explanation:
					"Charles Darwin developed the theory of evolution by natural selection, published in 'On the Origin of Species' (1859).",
			},
			{
				id: 7,
				question: "Who discovered radioactivity?",
				options: [
					"Marie Curie",
					"Pierre Curie",
					"Henri Becquerel",
					"Ernest Rutherford",
				],
				correctAnswer: 2,
				explanation:
					"Henri Becquerel discovered radioactivity in 1896, for which he shared the Nobel Prize with the Curies.",
			},
			{
				id: 8,
				question: "Which invention came first?",
				options: ["Television", "Radio", "Telephone", "Computer"],
				correctAnswer: 2,
				explanation:
					"The telephone was invented in 1876, before radio (1886), television (1920s), and computers (1940s).",
			},
		],
	},

	"15": {
		id: "15",
		title: "Ancient Civilizations",
		description: "Journey to the distant past",
		difficulty: "Hard",
		timeLimit: 23,
		reward: 100,
		questions: [
			{
				id: 1,
				question: "Which ancient civilization built Stonehenge?",
				options: ["Romans", "Celts", "Neolithic Britons", "Vikings"],
				correctAnswer: 2,
				explanation:
					"Stonehenge was built by Neolithic Britons around 3100-1600 BCE, long before the Romans or Celts.",
			},
			{
				id: 2,
				question:
					"What was the writing system of ancient Egypt called?",
				options: ["Cuneiform", "Hieroglyphics", "Linear A", "Runic"],
				correctAnswer: 1,
				explanation:
					"Ancient Egyptians used hieroglyphics, a system of pictographic and ideographic symbols.",
			},
			{
				id: 3,
				question: "Which empire was known for its Terracotta Army?",
				options: [
					"Roman Empire",
					"Persian Empire",
					"Chinese Empire",
					"Babylonian Empire",
				],
				correctAnswer: 2,
				explanation:
					"The Terracotta Army was created for China's first emperor, Qin Shi Huang, around 210 BCE.",
			},
			{
				id: 4,
				question: "What was the capital of the Aztec Empire?",
				options: [
					"Cusco",
					"Chichen Itza",
					"Teotihuacan",
					"Tenochtitlan",
				],
				correctAnswer: 3,
				explanation:
					"Tenochtitlan was the capital of the Aztec Empire, located where Mexico City stands today.",
			},
			{
				id: 5,
				question: "Which ancient wonder was located in Babylon?",
				options: [
					"Lighthouse of Alexandria",
					"Colossus of Rhodes",
					"Hanging Gardens",
					"Temple of Artemis",
				],
				correctAnswer: 2,
				explanation:
					"The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World.",
			},
			{
				id: 6,
				question: "What does 'Mesopotamia' mean?",
				options: [
					"Land of rivers",
					"Between rivers",
					"Ancient land",
					"Fertile ground",
				],
				correctAnswer: 1,
				explanation:
					"Mesopotamia means 'between rivers,' referring to the land between the Tigris and Euphrates rivers.",
			},
			{
				id: 7,
				question:
					"Which civilization created the first known legal code?",
				options: ["Egyptians", "Babylonians", "Greeks", "Romans"],
				correctAnswer: 1,
				explanation:
					"The Babylonians created the Code of Hammurabi, one of the earliest known legal codes (c. 1750 BCE).",
			},
			{
				id: 8,
				question: "What were Roman soldiers called?",
				options: [
					"Gladiators",
					"Centurions",
					"Legionaries",
					"Praetorians",
				],
				correctAnswer: 2,
				explanation:
					"Roman soldiers were called legionaries, organized into units called legions.",
			},
		],
	},
};

export default function QuizPage() {
	const params = useParams();
	const router = useRouter();
	const quizId = params.id as string;

	const [quiz, setQuiz] = useState<Quiz | null>(null);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
	const [timeLeft, setTimeLeft] = useState(0);
	const [quizStarted, setQuizStarted] = useState(false);
	const [quizCompleted, setQuizCompleted] = useState(false);
	const [score, setScore] = useState(0);
	const [showResults, setShowResults] = useState(false);

	useEffect(() => {
		const quizInfo = quizData[quizId];
		if (quizInfo) {
			setQuiz(quizInfo);
			setTimeLeft(quizInfo.timeLimit * 60); // Convert minutes to seconds
		}
	}, [quizId]);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (quizStarted && !quizCompleted && timeLeft > 0) {
			timer = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						handleQuizComplete();
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [quizStarted, quizCompleted, timeLeft]);

	const startQuiz = () => {
		setQuizStarted(true);
		setCurrentQuestion(0);
		setSelectedAnswers([]);
		setQuizCompleted(false);
		setShowResults(false);
	};

	const handleAnswerSelect = (answerIndex: number) => {
		const newAnswers = [...selectedAnswers];
		newAnswers[currentQuestion] = answerIndex;
		setSelectedAnswers(newAnswers);
	};

	const nextQuestion = () => {
		if (quiz && currentQuestion < quiz.questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			handleQuizComplete();
		}
	};

	const prevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleQuizComplete = () => {
		if (!quiz) return;

		setQuizCompleted(true);

		// Calculate score
		let correctAnswers = 0;
		quiz.questions.forEach((question, index) => {
			if (selectedAnswers[index] === question.correctAnswer) {
				correctAnswers++;
			}
		});

		const finalScore = correctAnswers;
		setScore(finalScore);

		// Calculate coins earned
		const percentage = (correctAnswers / quiz.questions.length) * 100;
		let coinsEarned = 0;
		if (percentage >= 80) {
			coinsEarned = quiz.reward;
		} else if (percentage >= 60) {
			coinsEarned = Math.floor(quiz.reward * 0.7);
		} else if (percentage >= 40) {
			coinsEarned = Math.floor(quiz.reward * 0.5);
		} else {
			coinsEarned = Math.floor(quiz.reward * 0.2);
		}

		// Save to localStorage
		const currentCoins = Number.parseInt(
			localStorage.getItem("quizCoins") || "0"
		);
		localStorage.setItem(
			"quizCoins",
			(currentCoins + coinsEarned).toString()
		);

		const completedQuizzes = JSON.parse(
			localStorage.getItem("completedQuizzes") || "[]"
		);
		if (!completedQuizzes.includes(quizId)) {
			completedQuizzes.push(quizId);
			localStorage.setItem(
				"completedQuizzes",
				JSON.stringify(completedQuizzes)
			);
		}

		setShowResults(true);
	};

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
			case "Medium":
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
			case "Hard":
				return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
			default:
				return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
		}
	};

	if (!quiz) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
						Quiz Not Found
					</h1>
					<Button
						onClick={() => router.push("/")}
						className='bg-blue-600 hover:bg-blue-700 text-white'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Home
					</Button>
				</div>
			</div>
		);
	}

	if (!quizStarted) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<Button
					onClick={() => router.push("/")}
					variant='ghost'
					className='mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
					<ArrowLeft className='w-4 h-4 mr-2' />
					Back to Home
				</Button>

				<div className='max-w-2xl mx-auto'>
					<Card className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
						<CardHeader className='text-center'>
							<div className='flex items-center justify-center space-x-2 mb-4'>
								<Trophy className='w-8 h-8 text-blue-600 dark:text-blue-400' />
								<CardTitle className='text-3xl text-gray-900 dark:text-white'>
									{quiz.title}
								</CardTitle>
							</div>
							<CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
								{quiz.description}
							</CardDescription>
							<div className='flex justify-center mt-4'>
								<Badge
									className={getDifficultyColor(
										quiz.difficulty
									)}>
									{quiz.difficulty}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
								<div className='p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
									<div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1'>
										{quiz.questions.length}
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Questions
									</div>
								</div>
								<div className='p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
									<div className='text-2xl font-bold text-green-600 dark:text-green-400 mb-1'>
										{quiz.timeLimit}
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Minutes
									</div>
								</div>
								<div className='p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
									<div className='text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1'>
										{quiz.reward}
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Max Coins
									</div>
								</div>
							</div>

							<div className='text-center'>
								<Button
									onClick={startQuiz}
									size='lg'
									className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'>
									Start Quiz
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	if (showResults) {
		const percentage = (score / quiz.questions.length) * 100;
		let coinsEarned = 0;
		if (percentage >= 80) {
			coinsEarned = quiz.reward;
		} else if (percentage >= 60) {
			coinsEarned = Math.floor(quiz.reward * 0.7);
		} else if (percentage >= 40) {
			coinsEarned = Math.floor(quiz.reward * 0.5);
		} else {
			coinsEarned = Math.floor(quiz.reward * 0.2);
		}

		return (
			<div className='container mx-auto px-4 py-8'>
				<div className='max-w-2xl mx-auto'>
					<Card className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
						<CardHeader className='text-center'>
							<div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Trophy className='w-8 h-8 text-green-600 dark:text-green-400' />
							</div>
							<CardTitle className='text-3xl text-gray-900 dark:text-white mb-2'>
								Quiz Completed!
							</CardTitle>
							<CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
								Great job on completing {quiz.title}
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
								<div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
									<div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1'>
										{score}/{quiz.questions.length}
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Correct Answers
									</div>
								</div>
								<div className='p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
									<div className='text-2xl font-bold text-green-600 dark:text-green-400 mb-1'>
										{percentage.toFixed(0)}%
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Score
									</div>
								</div>
								<div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
									<div className='text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1'>
										{coinsEarned}
									</div>
									<div className='text-sm text-gray-600 dark:text-gray-300'>
										Coins Earned
									</div>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Button
									onClick={() => router.push("/")}
									variant='outline'
									className='flex-1'>
									<ArrowLeft className='w-4 h-4 mr-2' />
									Back to Home
								</Button>
								<Button
									onClick={() => window.location.reload()}
									className='flex-1 bg-blue-600 hover:bg-blue-700 text-white'>
									Retake Quiz
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	const currentQ = quiz.questions[currentQuestion];
	const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='flex items-center justify-between mb-6'>
					<Button
						onClick={() => router.push("/")}
						variant='ghost'
						className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Exit Quiz
					</Button>
					<div className='flex items-center space-x-4'>
						<div className='flex items-center space-x-2 text-gray-600 dark:text-gray-300'>
							<Clock className='w-5 h-5' />
							<span className='font-mono text-lg'>
								{formatTime(timeLeft)}
							</span>
						</div>
					</div>
				</div>

				{/* Progress */}
				<div className='mb-8'>
					<div className='flex items-center justify-between mb-2'>
						<span className='text-sm text-gray-600 dark:text-gray-300'>
							Question {currentQuestion + 1} of{" "}
							{quiz.questions.length}
						</span>
						<span className='text-sm text-gray-600 dark:text-gray-300'>
							{progress.toFixed(0)}% Complete
						</span>
					</div>
					<Progress value={progress} className='h-2' />
				</div>

				{/* Question Card */}
				<Card className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8'>
					<CardHeader>
						<CardTitle className='text-xl text-gray-900 dark:text-white'>
							{currentQ.question}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='space-y-3'>
							{currentQ.options.map((option, index) => (
								<button
									key={index}
									onClick={() => handleAnswerSelect(index)}
									className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
										selectedAnswers[currentQuestion] ===
										index
											? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100"
											: "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
									}`}>
									<div className='flex items-center space-x-3'>
										<div
											className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
												selectedAnswers[
													currentQuestion
												] === index
													? "border-blue-500 bg-blue-500"
													: "border-gray-300 dark:border-gray-500"
											}`}>
											{selectedAnswers[
												currentQuestion
											] === index && (
												<CheckCircle className='w-4 h-4 text-white' />
											)}
										</div>
										<span className='font-medium'>
											{option}
										</span>
									</div>
								</button>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Navigation */}
				<div className='flex items-center justify-between'>
					<Button
						onClick={prevQuestion}
						disabled={currentQuestion === 0}
						variant='outline'
						className='flex items-center space-x-2 bg-transparent'>
						<ArrowLeft className='w-4 h-4' />
						<span>Previous</span>
					</Button>

					<div className='text-sm text-gray-500 dark:text-gray-400'>
						{selectedAnswers[currentQuestion] !== undefined
							? "Answer selected"
							: "Select an answer"}
					</div>

					<Button
						onClick={nextQuestion}
						disabled={
							selectedAnswers[currentQuestion] === undefined
						}
						className='flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white'>
						<span>
							{currentQuestion === quiz.questions.length - 1
								? "Finish"
								: "Next"}
						</span>
						<ArrowRight className='w-4 h-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
