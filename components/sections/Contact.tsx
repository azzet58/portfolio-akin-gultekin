import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-neutral-100 to-neutral-200"
    >
      <div className="mx-auto flex max-w-4xl flex-col justify-center gap-4 pt-24 pb-36">
        <h2 className="font-heading text-2xl">Let's have a chat.</h2>
        <form className="flex w-full flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-12 w-full rounded-md bg-white p-4 text-sm shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-12 w-full rounded-md bg-white p-4 text-sm shadow-sm"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="h-40 rounded-md bg-white p-4 text-sm shadow-sm"
          />
          <Button className="font-heading rounded-full bg-white text-center font-medium transition-colors duration-400 hover:bg-zinc-100">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
