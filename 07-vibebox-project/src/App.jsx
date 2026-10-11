import React, { useState } from "react";
import { songs } from "./data/songs";
import SongCard from "./components/SongCard";

const App = () => {
  // These states control the search, genre filter and favourites.
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // Keep the three playlists from the original design, but make them functional.
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "Late Night",
      description: "For the quiet hours",
      songIds: [],
    },
    {
      id: 2,
      name: "Daily Rotation",
      description: "The songs on repeat",
      songIds: [],
    },
    {
      id: 3,
      name: "Focus",
      description: "Less noise, more flow",
      songIds: [],
    },
  ]);

  // This controls the create-playlist form.
  const [playlistName, setPlaylistName] = useState("");

  // Search by title or artist, then apply the selected genre.
  const filteredSongs = songs.filter((song) => {
    const searchText = search.toLowerCase().trim();

    const titleMatches = song.title
      .toLowerCase()
      .includes(searchText);

    const artistMatches = song.artist
      .toLowerCase()
      .includes(searchText);

    const matchesSearch = titleMatches || artistMatches;

    const matchesGenre =
      selectedGenre === "All" || song.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  // Clicking the heart either saves a song or removes it.
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((favoriteId) => favoriteId !== id)
        : [...previous, id]
    );
  };

  // Create a playlist only when the user has entered a name.
  const createPlaylist = (e) => {
    e.preventDefault();

    const name = playlistName.trim();

    if (!name) return;

    const newPlaylist = {
      id: Date.now(),
      name: name,
      description: "Your personal collection",
      songIds: [],
    };

    setPlaylists((previous) => [...previous, newPlaylist]);
    setPlaylistName("");
  };

  // Add a song to the selected playlist without creating duplicates.
  const addSongToPlaylist = (songId, playlistId) => {
    setPlaylists((previous) =>
      previous.map((playlist) => {
        if (playlist.id !== playlistId) {
          return playlist;
        }

        if (playlist.songIds.includes(songId)) {
          return playlist;
        }

        return {
          ...playlist,
          songIds: [...playlist.songIds, songId],
        };
      })
    );
  };

  // Remove a song from one playlist without affecting other playlists.
  const removeSongFromPlaylist = (playlistId, songId) => {
    setPlaylists((previous) =>
      previous.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              songIds: playlist.songIds.filter(
                (id) => id !== songId
              ),
            }
          : playlist
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#F4F3EF]">

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-[#292C2E] bg-[#151719] px-5 py-7 md:flex">

        <a href="#" className="mb-12 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B7D6C2] text-[#111315]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>

          <span className="text-xl font-semibold tracking-tight">
            vibebox
          </span>
        </a>

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777D7E]">
          Library
        </p>

        <nav className="space-y-1">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-lg bg-[#242A27] px-3 py-2.5 text-sm font-medium text-[#B7D6C2]"
          >
            <span>⌂</span> Home
          </a>

          <a
            href="#discover"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#A4A9A8] transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            <span>⌕</span> Discover
          </a>

          <a
            href="#favorites"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#A4A9A8] transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            <span>♡</span> Favourites
          </a>

          <a
            href="#playlists"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#A4A9A8] transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            <span>♫</span> Playlists
          </a>
        </nav>

        <div className="mb-3 mt-10 flex items-center justify-between px-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777D7E]">
            Your playlists
          </p>

          <a href="#create-playlist" className="text-lg text-[#A4A9A8]">
            +
          </a>
        </div>

        <div className="space-y-1">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              href={`#playlist-${playlist.id}`}
              className="block truncate rounded-lg px-3 py-2.5 text-sm text-[#A4A9A8] hover:bg-white/[0.04] hover:text-white"
            >
              {playlist.name}
            </a>
          ))}
        </div>

        <div className="mt-auto border-t border-[#292C2E] pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292C2E] text-sm">
              S
            </div>

            <div>
              <p className="text-sm font-medium">Your account</p>
              <p className="mt-0.5 text-xs text-[#777D7E]">
                Personal library
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pb-10 md:ml-60">

        {/* Top Navigation and search */}
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#292C2E] bg-[#111315]/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="relative w-full max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777D7E]">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search songs, artists..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#303436] bg-[#191C1E] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#777D7E] focus:border-[#7FA58E]"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("favorites")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="ml-4 hidden rounded-lg border border-[#303436] px-4 py-2.5 text-sm text-[#D3D5D1] transition-colors hover:bg-white/[0.05] sm:block"
          >
            ♡ {favorites.length} favourites
          </button>
        </header>

        <div
          id="home"
          className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-10"
        >

          {/* Page Heading */}
          <section className="mb-9">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8EAF9B]">
              YOUR MUSIC SPACE
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Listen to your mood.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#929897]">
              A place for the songs you love, the sounds you discover,
              and the playlists that make them yours.
            </p>
          </section>


          {/* Popular Songs */}
          <section id="discover" className="mb-12">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Popular right now
                </h2>

                <p className="mt-1 text-sm text-[#929897]">
                  Tracks worth another listen.
                </p>
              </div>

              <span className="text-sm text-[#B7D6C2]">
                {filteredSongs.length} tracks
              </span>
            </div>

            {/* Choosing a genre updates the songs shown below. */}
            <div className="mb-5 flex flex-wrap gap-2">
              {["All", "Pop", "Indie", "Rock", "Romance"].map(
                (genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => setSelectedGenre(genre)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedGenre === genre
                        ? "border-[#B7D6C2] bg-[#B7D6C2] text-black"
                        : "border-[#2A2E2D] bg-[#202321] text-[#A4A9A8] hover:text-white"
                    }`}
                  >
                    {genre}
                  </button>
                )
              )}
            </div>

            {/* SongCard handles the look of each individual song. */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {filteredSongs.length > 0 ? (
                filteredSongs.map((song) => (
                  <SongCard
                    key={song.id}
                    song={song}
                    isFavorite={favorites.includes(song.id)}
                    onToggleFavorite={toggleFavorite}
                    playlists={playlists}
                    onAddSongToPlaylist={addSongToPlaylist}
                  />
                ))
              ) : (
                <p className="col-span-full py-10 text-center text-sm text-[#929897]">
                  No songs found. Try another title or artist.
                </p>
              )}
            </div>
          </section>

          {/* Favourites */}
          <section id="favorites" className="mb-12">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Your favourites
                </h2>

                <p className="mt-1 text-sm text-[#929897]">
                  The tracks you want to come back to.
                </p>
              </div>

              <span className="text-sm text-[#B7D6C2]">
                {favorites.length} saved
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {songs
                .filter((song) => favorites.includes(song.id))
                .map((song) => (
                  <SongCard
                    key={song.id}
                    song={song}
                    isFavorite={true}
                    onToggleFavorite={toggleFavorite}
                    playlists={playlists}
                    onAddSongToPlaylist={addSongToPlaylist}
                  />
                ))}
            </div>

            {favorites.length === 0 && (
              <div className="rounded-xl border border-dashed border-[#303436] bg-[#191C1E]/50 px-5 py-8 text-center">
                <p className="text-2xl text-[#B7D6C2]">♡</p>

                <p className="mt-3 text-sm font-medium text-[#D3D5D1]">
                  No favourites yet
                </p>

                <p className="mt-1 text-sm text-[#929897]">
                  Tap the heart on any song to add it here.
                </p>
              </div>
            )}
          </section>

          {/* Playlists: the original three cards now use React state. */}
          <section id="playlists" className="mb-12">
            <div className="mb-5">
              <h2 className="text-xl font-semibold tracking-tight">
                Your playlists
              </h2>

              <p className="mt-1 text-sm text-[#929897]">
                Collections for every kind of day.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {playlists.map((playlist, index) => (
                <article
                  key={playlist.id}
                  id={`playlist-${playlist.id}`}
                  className="rounded-lg border border-[#303436] bg-[#191C1E] p-4 transition-colors hover:border-[#59675E]"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-md text-2xl ${
                        index % 3 === 0
                          ? "bg-[#29382F] text-[#B7D6C2]"
                          : index % 3 === 1
                            ? "bg-[#373027] text-[#D8BE96]"
                            : "bg-[#292F3B] text-[#B9C9E2]"
                      }`}
                    >
                      ♫
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium">
                        {playlist.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#929897]">
                        {playlist.description}
                      </p>

                      <p className="mt-2 text-xs text-[#777D7E]">
                        {playlist.songIds.length} tracks
                      </p>
                    </div>
                  </div>

                  {/* Each playlist shows its own songs and remove controls. */}
                  {playlist.songIds.length > 0 && (
                    <div className="mt-4 space-y-2 border-t border-[#303436] pt-3">
                      {songs
                        .filter((song) =>
                          playlist.songIds.includes(song.id)
                        )
                        .map((song) => (
                          <div
                            key={song.id}
                            className="flex items-center justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm text-[#D3D5D1]">
                                {song.title}
                              </p>
                              <p className="truncate text-xs text-[#777D7E]">
                                {song.artist}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeSongFromPlaylist(
                                  playlist.id,
                                  song.id
                                )
                              }
                              aria-label={`Remove ${song.title} from ${playlist.name}`}
                              className="shrink-0 rounded-md px-2 py-1 text-xs text-[#929897] hover:bg-white/[0.05] hover:text-white"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Create Playlist */}
          <section
            id="create-playlist"
            className="flex flex-col items-start justify-between gap-5 rounded-xl border border-[#303436] p-6 sm:p-7"
          >
            <div>
              <h2 className="text-lg font-semibold">
                Make it your own
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#929897]">
                Create a playlist for the music you want to keep close.
              </p>
            </div>

            <form
              onSubmit={createPlaylist}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Give your playlist a name..."
                aria-label="Playlist name"
                className="min-w-0 flex-1 rounded-lg border border-[#303436] bg-[#191C1E] px-4 py-2.5 text-sm text-white outline-none placeholder:text-[#777D7E] focus:border-[#7FA58E]"
              />

              <button
                type="submit"
                className="shrink-0 rounded-lg border border-[#59675E] px-4 py-2.5 text-sm font-medium text-[#B7D6C2] transition-colors hover:bg-[#242A27]"
              >
                + Create playlist
              </button>
            </form>
          </section>

          {/* Footer */}
          <footer className="mt-10 border-t border-[#292C2E] pt-5 text-xs text-[#777D7E]">
            VibeBox · Your music, organised.
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;
