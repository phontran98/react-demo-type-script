type GreetProps = {
  name: string;
  isLoggin: boolean;
  messageCount?: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggin ? (
        <h1>
          Welcome {props.name} ! You have {props.messageCount} message
        </h1>
      ) : (
        <h1>Hi Guest</h1>
      )}
    </>
  );
};
