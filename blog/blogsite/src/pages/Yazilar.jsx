import { useState } from "react";
import AddPost from "../components/AddPost";
import Posts from "../components/Posts";

function Yazilar() {
    const [reload, setReload] = useState(false);

    const refreshPosts = () => {
        setReload(!reload);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Yazılar</h1>
            <AddPost onPostAdded={refreshPosts} />
            <Posts reloadTrigger={reload} />
        </div>
    );
}

export default Yazilar;
