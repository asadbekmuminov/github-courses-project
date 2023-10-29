import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepos = async () => {
  const req = await fetch("https://api.github.com/users/asadbekmuminov/repos");
  const repos = await req.json();
  repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  return repos;
};

async function ReposPage() {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="repos-container">
      <h1>My Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`/code/repo/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.full_name}</p>
                <div className="repo-details">
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReposPage;
