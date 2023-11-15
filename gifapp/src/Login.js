import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logique de connexion ici
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-4xl text-center text-blue-700 mb-4">Connexion</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-1/5 p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-1/5 p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 w-24 text-sm text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none"
        >
          Connexion
        </button>
      </div>
    </div>
  );
};

export default Login;
