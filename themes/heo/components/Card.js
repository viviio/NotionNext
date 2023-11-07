const Card = ({ children, headerSlot, className }) => {
  return <div className={`${className || ''} card border dark:border-gray-700 rounded-xl lg:p-7 p-6`}>
    <>{headerSlot}</>
    <section>
        {children}
    </section>
  </div>
}
export default Card
