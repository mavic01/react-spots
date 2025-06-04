import "./footer.css"

const Footer = () => {
  const presentYear = new Date().getFullYear()
  return (
    <footer>
      <div>{presentYear} &copy; Spots</div>
    </footer>

  )
}

export default Footer