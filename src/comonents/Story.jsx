import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import StoriesPaginate from "./StoriesPaginate";
import { useState } from "react";
export default function Story(){
    const articles = [
        {
          id:0,
          title: "Mindfulness Meditation",
          description: "Exploring the benefits of mindfulness meditation for reducing stress and improving mental clarity.",
          name: "Dr. Emily Parker",
          country: "United States"
        },
        {
            id:1,
          title: "Understanding Anxiety",
          description: "A comprehensive guide to understanding the causes and symptoms of anxiety and how to manage it effectively.",
          name: "John Smith",
          country: "Canada"
        },
        {
            id:2,
          title: "The Power of Positive Thinking",
          description: "How positive thinking can improve your mental health and overall well-being.",
          name: "Sophie Clarke",
          country: "Australia"
        },
        {
            id:3,
          title: "Overcoming Depression",
          description: "Strategies and tips for overcoming depression and finding joy in everyday life.",
          name: "Dr. Raj Patel",
          country: "India"
        },
        {
            id:4,
          title: "Mental Health and Nutrition",
          description: "Exploring the connection between diet and mental health, and how proper nutrition can boost your mood.",
          name: "Laura Martin",
          country: "United Kingdom"
        },
        {
            id:5,
          title: "Coping with Stress at Work",
          description: "Effective techniques for managing stress in a high-pressure work environment.",
          name: "Carlos Mendes",
          country: "Brazil"
        },
        {
            id:6,
          title: "The Role of Exercise in Mental Health",
          description: "How regular physical activity can help reduce anxiety, depression, and stress.",
          name: "Lisa Chen",
          country: "China"
        },
        {
            id:7,
          title: "Understanding Bipolar Disorder",
          description: "An in-depth look at bipolar disorder, its symptoms, and treatment options.",
          name: "Michael Johnson",
          country: "South Africa"
        },
        {
            id:8,
          title: "Building Resilience",
          description: "Tips on how to build mental resilience to handle life's challenges more effectively.",
          name: "Anna Garcia",
          country: "Mexico"
        },
        {
            id:9,
          title: "Mental Health in Adolescents",
          description: "Addressing the unique mental health challenges faced by teenagers and how to support them.",
          name: "Dr. Yusuf Ahmed",
          country: "Egypt"
        },
        {
            id:10,
          title: "The Impact of Social Media on Mental Health",
          description: "Analyzing how social media affects mental well-being, particularly among young adults.",
          name: "Maria Rodriguez",
          country: "Spain"
        },
        {
            id:11,
          title: "Self-Care Tips for Mental Health",
          description: "Practical self-care tips to maintain mental health and prevent burnout.",
          name: "Hiroshi Tanaka",
          country: "Japan"
        },
        {
            id:12,
          title: "Understanding PTSD",
          description: "A guide to understanding post-traumatic stress disorder and how to seek help.",
          name: "Fatima Khan",
          country: "Pakistan"
        },
        {
            id:13,
          title: "Mental Health First Aid",
          description: "How to provide first aid for mental health emergencies in everyday situations.",
          name: "Nathan Thompson",
          country: "New Zealand"
        },
        {
            id:14,
          title: "The Connection Between Sleep and Mental Health",
          description: "Exploring how sleep quality affects mental health and strategies for better sleep.",
          name: "Olivia Wilson",
          country: "Ireland"
        },
        {
            id:15,
          title: "Combating Loneliness",
          description: "Ways to combat loneliness and build meaningful social connections.",
          name: "Akira Yamamoto",
          country: "South Korea"
        },
        {
            id:16,
          title: "Mindful Eating and Mental Health",
          description: "How mindful eating practices can improve mental health and overall well-being.",
          name: "Isabella Costa",
          country: "Italy"
        },
        {
            id:17,
          title: "Recognizing Signs of Mental Illness",
          description: "A guide to recognizing the early signs of mental illness in yourself and others.",
          name: "Ali Rahman",
          country: "United Arab Emirates"
        }
      ]; 
      const [page,setPage] = useState(1)
    const [itemsPerPage,setItems] = useState(6)
    const indexOfLastItem = ((page*itemsPerPage))
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentArticles = articles.slice(indexOfFirstItem,indexOfLastItem)
    //console.log(indexOfFirstItem,indexOfLastItem)
    const paginate = (num)=>{
        setPage(num)
    }
    console.log(page)
    const totalPages = Math.ceil(articles.length / itemsPerPage)
      //let color = c%2 ? 'bg-[#9EB1D9]' : 'bg-[#E0EDF7]'
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Stories</h1>
            <div className="grid grid-cols-3 items-center justify-center w-[90%] mt-4 shadow-black shadow-md gap-10 p-6">
                {currentArticles.map((article)=>(
                    <div className={`min-h-[400px] flex flex-col items-left p-4 justify-start gap-4 shadow-black shadow-sm rounded-md
                    ${article.id%2 ? 'bg-[#9EB1D9]' : 'bg-[#E0EDF7]'}`}>
                        <FaComment className={`w-[60px] h-[75px] ${article.id%2 ? 'text-white' : 'text-black'} mb-8 `} />
                        <p className="text-lg font-semibold">{article.title}</p>
                        <button className="text-right mb-8">readMore...</button>
                        <p>{article.name},{article.country}</p>
                        <p className="flex flex-row items-end justify-end">
                        <CiHeart className="w-[30px] h-[40px] mt-2" />
                        </p>
                    </div>
                ))}
            </div>
            <StoriesPaginate totalPages={totalPages} paginate={paginate} currentPage={page} />
        </div>
    )
}