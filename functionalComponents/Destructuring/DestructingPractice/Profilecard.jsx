function Profile({ name, role, company }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{company}</p>
    </div>
  );
}

export default function App() {
  return (
    <Profile
      name="Gupta"
      role="Frontend Developer"
      company="NYB Infotech"
    />
  );
}