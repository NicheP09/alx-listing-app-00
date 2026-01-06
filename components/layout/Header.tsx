const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-xl font-bold">ALX Stays</h1>

        <input
          type="text"
          placeholder="Search destinations"
          className="hidden md:block rounded-lg border px-4 py-2"
        />

        <div className="flex gap-4 text-sm">
          <button>Sign in</button>
          <button className="rounded bg-black px-4 py-2 text-white">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
