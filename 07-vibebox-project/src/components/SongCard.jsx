import React, { useState } from "react";

const SongCard = (props) => {
  // Start with the first playlist selected so adding a song takes fewer clicks.
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(
    String(props.playlists[0]?.id ?? "")
  );

  const selectedPlaylist = props.playlists.find(
    (playlist) => playlist.id === Number(selectedPlaylistId)
  );

  // Don't let the same song get added twice to one playlist.
  const alreadyAdded = selectedPlaylist
    ? selectedPlaylist.songIds.includes(props.song.id)
    : false;

  return (
    <article className="group min-w-0 rounded-xl border border-[#2A2E2D] bg-[#202321] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-[#496359] hover:bg-[#272b2a]">

      {/* Cover art and its two action buttons */}
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <img
          src={props.song.cover}
          alt={props.song.title}
          className="aspect-square w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {/* This heart reflects whether the song is already a favourite. */}
        <button
          type="button"
          onClick={() => props.onToggleFavorite(props.song.id)}
          aria-label={
            props.isFavorite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          className={`absolute left-2 top-2 grid h-9 w-9 place-items-center rounded-full transition ${
            props.isFavorite
              ? "bg-[#B7D6C2] text-black"
              : "bg-black/60 text-white hover:bg-black/80"
          }`}
        >
          {props.isFavorite ? "♥" : "♡"}
        </button>

        {/* Premium play button */}
        <button
          type="button"
          className="absolute bottom-2 right-2 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#eaf9ee] via-[#cfead7] to-[#a8d0b1] text-[#111315] opacity-0 shadow-[0_12px_28px_rgba(168,208,177,0.42)] ring-2 ring-[#f5f8f6]/40 transition duration-200 group-hover:opacity-100"
          aria-label={`Play ${props.song.title}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M8 6.25v11.5a1 1 0 0 0 1.53.85l8.18-5.75a1 1 0 0 0 0-1.7L9.53 5.4A1 1 0 0 0 8 6.25Z" />
          </svg>
        </button>
      </div>

      {/* Song details */}
      <h3 className="truncate text-sm font-semibold text-white">
        {props.song.title}
      </h3>

      <p className="mt-1 truncate text-sm text-[#A4A9A8]">
        {props.song.artist}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-[#303631] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#D4D8D5]">
          {props.song.genre}
        </span>

        <span className="text-xs text-[#929897]">
          {props.song.duration}
        </span>
      </div>

      {/* Choose a playlist and add the current song to it. */}
      <div className="mt-4 border-t border-[#303436] pt-3">
        <label
          htmlFor={`playlist-select-${props.song.id}`}
          className="mb-2 block text-xs text-[#929897]"
        >
          Add to playlist
        </label>

        <select
          id={`playlist-select-${props.song.id}`}
          value={selectedPlaylistId}
          onChange={(e) => setSelectedPlaylistId(e.target.value)}
          className="w-full rounded-lg border border-[#303436] bg-[#191C1E] px-2 py-2 text-xs text-[#D3D5D1] outline-none focus:border-[#7FA58E]"
        >
          {props.playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={!selectedPlaylist || alreadyAdded}
          onClick={() =>
            props.onAddSongToPlaylist(
              props.song.id,
              Number(selectedPlaylistId)
            )
          }
          className={`mt-2 w-full rounded-lg px-3 py-2 text-xs font-medium transition ${
            !selectedPlaylist || alreadyAdded
              ? "cursor-not-allowed bg-[#292C2E] text-[#777D7E]"
              : "bg-[#29382F] text-[#B7D6C2] hover:bg-[#35483B]"
          }`}
        >
          {alreadyAdded ? "✓ Added to playlist" : "+ Add song"}
        </button>
      </div>
    </article>
  );
};

export default SongCard;