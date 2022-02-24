function User({ name, email }) {
  return (
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{email}</p>
      </div>
    </div>
  );
}

export default User;
