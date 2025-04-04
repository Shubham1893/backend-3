// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function RecipeDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/recipe/${id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

//   if (!recipe) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center" onClick={() => navigate(-1)}>
//       <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
//         <img src={`http://localhost:4000/images/${recipe.coverImage}`} alt={recipe.title} className="w-full h-64 object-cover rounded-t-lg" />
//         <div className="p-4">
//           <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg">{recipe.title}</h2>
//           <p className="text-gray-700 text-center mt-2"><strong>Time:</strong> {recipe.time}</p>
//           <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
//           <ul className="list-disc list-inside text-gray-700">
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//           <h3 className="text-xl font-semibold mt-4">Instructions</h3>
//           <p className="text-gray-700">{recipe.instructions}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function RecipeDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/recipe/${id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

//   if (!recipe) {
//     return <div style={{ textAlign: "center", marginTop: "10px" }}>Loading...</div>;
//   }

//   return (
//     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.75)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => navigate(-1)}>
//       <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", maxWidth: "600px", width: "90%", padding: "20px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
//         <img src={`http://localhost:4000/images/${recipe.coverImage}`} alt={recipe.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} />
//         <div style={{ padding: "15px" }}>
//           <h2 style={{ textAlign: "center", background: "linear-gradient(to right, #FF7E5F, #FEB47B)", color: "white", padding: "10px", borderRadius: "5px" }}>{recipe.title}</h2>
//           <p style={{ textAlign: "center", marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}><strong>Time:</strong> {recipe.time}</p>
//           <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>Ingredients</h3>
//           <ul style={{ paddingLeft: "20px", color: "#555" }}>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//           <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>Instructions</h3>
//           <p style={{ color: "#555" }}>{recipe.instructions}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/recipe/${id}`);
        console.log("Fetched Recipe Data:", response.data); // Debugging log
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div style={{ textAlign: "center", marginTop: "10px" }}>Loading...</div>;
  }

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.75)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => navigate(-1)}>
      <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", maxWidth: "600px", width: "90%", padding: "20px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <img src={`http://localhost:4000/images/${recipe.coverImage}`} alt={recipe.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} />
        <div style={{ padding: "15px" }}>
          <h2 style={{ textAlign: "center", background: "linear-gradient(to right, #FF7E5F, #FEB47B)", color: "white", padding: "10px", borderRadius: "5px" }}>{recipe.title}</h2>
          <p style={{ textAlign: "center", marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}><strong>Time:</strong> {recipe.time}</p>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>Ingredients</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            {recipe.ingredients && Array.isArray(recipe.ingredients) ? recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            )) : <p>No ingredients available.</p>}
          </ul>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>Instructions</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            {recipe.instructions && Array.isArray(recipe.instructions) ? recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            )) : <p>No instructions available.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}


