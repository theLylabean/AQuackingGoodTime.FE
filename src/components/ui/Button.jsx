// src/components/ui/button.jsx
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-yellow-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;