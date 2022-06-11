const SvgSass = (props) => (
  <svg
    /*    width={256}
    height={192} */
    viewBox="0 0 256 192"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362-2.379-4.71-4.757-8.906-5.176-11.984-.467-3.59-1.026-5.782-.467-10.072.56-4.29 3.078-10.399 3.031-10.865-.046-.466-.56-2.658-5.689-2.704-5.129-.047-9.559.979-10.072 2.331-.513 1.352-1.492 4.43-2.145 7.6-.886 4.664-10.258 21.31-15.62 30.03-1.726-3.403-3.218-6.388-3.545-8.766-.466-3.59-1.026-5.782-.466-10.072.56-4.29 3.078-10.398 3.031-10.865-.047-.466-.56-2.658-5.689-2.704-5.13-.047-9.56.979-10.072 2.331-.513 1.353-1.073 4.523-2.145 7.601-1.073 3.078-13.523 30.87-16.787 38.05a214.726 214.726 0 0 1-4.15 8.627s-.047.14-.187.373a117.773 117.773 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425-.28 0-.793-3.357.093-7.927 1.865-9.652 6.295-24.667 6.249-25.18 0-.28.839-2.891-2.891-4.244-3.638-1.352-4.943.886-5.27.886-.326 0-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6269.96 6269.96 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523-.187-.186-.373-.42-.56-.606-14.269-15.248-40.661-26.02-39.542-46.49.42-7.461 2.984-27.046 50.687-50.827 39.262-19.352 70.505-13.99 75.914-2.099 7.74 16.974-16.74 48.496-57.309 53.065-15.481 1.726-23.595-4.243-25.646-6.481-2.145-2.332-2.472-2.472-3.265-2.005-1.305.7-.466 2.798 0 4.01 1.213 3.17 6.202 8.766 14.642 11.518 7.461 2.424 25.6 3.777 47.563-4.71 24.574-9.513 43.786-35.952 38.144-58.101-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035 2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127-.653.373-1.26.7-1.772.98-6.482 3.217-31.196 16.133-37.351 29.796-6.994 15.481 1.12 26.58 6.482 28.071 16.647 4.617 33.76-3.683 42.946-17.393 9.186-13.709 8.067-31.522 3.824-39.682-.047-.093-.093-.187-.187-.28 1.679-.979 3.404-2.005 5.083-2.984a247.933 247.933 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974-.7 8.767 2.89 20.144 7.6 24.62 2.099 1.96 4.57 2.006 6.156 2.006 5.502 0 7.974-4.57 10.725-9.979 3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373 6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99-5.083 6.061-11.144 13.01-11.984 15.014-.98 2.378-.746 4.104 1.12 5.503 1.352 1.026 3.776 1.165 6.248 1.026 4.57-.327 7.787-1.446 9.372-2.145 2.472-.886 5.363-2.239 8.067-4.244 4.99-3.684 8.02-8.953 7.741-15.9-.14-3.824-1.399-7.648-2.938-11.239.467-.652.886-1.305 1.353-1.958 7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258-7.414 6.016-11.984 13.01-13.616 17.58-2.937 8.487-.653 12.31 3.684 13.196 1.958.42 4.756-.513 6.808-1.399 2.611-.839 5.689-2.284 8.627-4.43 4.99-3.683 9.792-8.813 9.512-15.76-.14-3.171-.979-6.296-2.145-9.327 6.295-2.61 14.409-4.056 24.76-2.844 22.197 2.611 26.58 16.46 25.74 22.29-.839 5.828-5.502 8.999-7.04 9.978-1.54.98-2.052 1.306-1.912 2.005.186 1.026.932.98 2.238.793 1.819-.326 11.658-4.71 12.077-15.435.7-13.709-12.357-28.677-35.439-28.537ZM49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487-4.756-2.752-2.891-14.596 6.155-23.082 5.502-5.176 12.59-9.98 17.3-12.917 1.072-.653 2.658-1.585 4.57-2.751.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243Zm53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357-2.798-.746-4.524-12.87-.56-24.854 2.005-6.016 6.248-13.197 8.72-15.994 4.01-4.477 8.44-5.97 9.512-4.15 1.353 2.378-4.896 19.724-6.481 23.641Zm44.252 21.17c-1.073.56-2.098.933-2.565.653-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896Zm34.133-7.787c-.793-.56-.653-2.425 2.005-8.254 1.026-2.285 3.45-6.108 7.601-9.792.466 1.492.793 2.938.746 4.29-.047 9-6.481 12.357-10.352 13.756Z"
      fill="#CD6799"
    />
  </svg>
);

export default SvgSass;
