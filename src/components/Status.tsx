type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === 'loading') {
    message = '...Loading';
  } else if (props.status === 'success') {
    message = 'Data fetched success';
  } else {
    message = 'Error fetching data';
  }
  return <h2>Status - {message}</h2>;
};

export default Status;
