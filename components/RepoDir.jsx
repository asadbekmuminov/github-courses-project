import Link from "next/link";

async function fetchContents(name) {
  const req = await fetch(
    `https://api.github.com/repos/asadbekmuminov/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await req.json();
  return contents;
}

async function RepoDir({ name }) {
  const contents = await fetchContents(name);

  const dirs = contents.filter((content) => content.type === "dir");
  console.log(dirs);

  return (
    <div>
      <h3>Content links</h3>
      <ul>
        {dirs.length == 0 ? (
          <p>No content</p>
        ) : (
          dirs.map((dir) => {
            return (
              <li key={dir.url}>
                <Link href="">{dir.path}</Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default RepoDir;
