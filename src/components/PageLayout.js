const PageLayout = ({ title, children }) => (
  <section>
    <header>
      <h1>{title}</h1>
    </header>
    {children && (
      <>
        <hr />
        <div className="content">{children}</div>
        <hr />
      </>
    )}
  </section>
);

export default PageLayout;
