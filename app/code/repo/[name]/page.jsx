import Repo from "@/components/Repo";
import RepoDir from "@/components/RepoDir";
import { Suspense } from "react";

function ReposPage({ params: { name } }) {
  return (
    <div className="container">
      <div className="card ">
        <Suspense fallback={<div>Loading repo ...</div>}>
          <Repo name={name} />
        </Suspense>

        <Suspense fallback={<div>Loading directories ...</div>}>
          <RepoDir name={name} />
        </Suspense>
      </div>
    </div>
  );
}

export default ReposPage;
