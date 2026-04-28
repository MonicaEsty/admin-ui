import React, { useState } from "react";

function PostCard({ title, body }) {
const [clicked,setClicked] = useState(false);

return (
<div
className="
w-[170px]
h-[145px]
bg-white
rounded
shadow-sm
p-2
flex flex-col justify-between
transition-all duration-300
hover:scale-105
hover:border
hover:border-black
hover:bg-red-50
"
>

<div>
<h2 className="
text-[9px]
font-bold
text-center
leading-3
mb-2
line-clamp-3
">
{title}
</h2>

<p className="
text-[8px]
text-gray-600
text-center
leading-3
line-clamp-4
">
{body}
</p>
</div>

<button
type="button"
onClick={() => setClicked(true)}
className={`
w-full
py-1
rounded
text-[8px]
font-semibold
text-white
${clicked ? "bg-[#b83016]" : "bg-gray-500"}
`}
>
{clicked ? "Tombol sudah diklik" : "Silakan Klik"}
</button>

</div>
);
}

export default PostCard;