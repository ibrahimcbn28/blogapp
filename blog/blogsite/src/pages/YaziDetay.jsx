import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function YaziDetay() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log("Detay yükleme hatası:", err));
    }, [id]);

    if (!post) return <div>Yükleniyor...</div>;

    return (
        <div style={{ padding: "2rem" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Yazar:</strong> {post.author}</p>
        </div>
    );
}

export default YaziDetay;
