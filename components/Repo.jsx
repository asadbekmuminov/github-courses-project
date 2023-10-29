import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const req = await fetch(
    `https://api.github.com/repos/asadbekmuminov/${name}`
  );
  const repo = await req.json();
  return repo;
}

async function Repo({ name }) {
  const repo = await fetchRepo(name);
  console.log(repo);
  return (
    <div className="repo-box">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="repo-details repo-mini-box">
        <span>
          <FaStar /> {repo.stargazers_count}
        </span>
        <span>
          <FaCodeBranch />
          {repo.forks_count}
        </span>
        <span>
          <FaEye />
          {repo.watchers_count}
        </span>
      </div>
    </div>
  );
}

export default Repo;
