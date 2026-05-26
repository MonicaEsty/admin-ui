import React from "react";
import PostCard from "./PostCard";
import posts from "./postsData";

function Exercise() {
return (
<div className="min-h-screen bg-gray-100 p-6">

<h1 className="text-2xl font-bold text-center mb-6 text-[#b83016]">
Post Cards
</h1>

<div
className="
max-w-[1100px]
mx-auto
grid
grid-cols-2
md:grid-cols-4
lg:grid-cols-6
gap-3
justify-items-center
"
>
{posts.map((post) => (
<PostCard
key={post.id}
{...post}
/>
))}
</div>

</div>
);
}

export default Exercise;