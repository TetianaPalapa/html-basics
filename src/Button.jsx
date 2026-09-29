function Button({ children, ...props }) {
  return (
    <button
      className="w-full py-2 px-3 font-sans text-[length:var(--font-size-sm)] leading-[var(--leading-sm)] text-white bg-pink-700 border border-solid border-pink-700 rounded-full cursor-pointer hover:bg-[color-mix(in_srgb,var(--pink-700)_85%,black)]"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
