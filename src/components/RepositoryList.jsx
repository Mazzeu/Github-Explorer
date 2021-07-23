import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
  return(
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository="unform2"/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  );
}