/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { Container, jsx } from "theme-ui";
import { LinksBucket } from "./LinksBucket";

// Add a custom Link
export function ShowLinks({ data, bucketData, deleteItem, editLinkModal }) {
  const router = useRouter();
  const buckets = [];
  data.map((item) => {
    if (buckets.indexOf(item.bucket) === -1) {
      buckets.push(item.bucket);
    }
  });

  const addLinks = () => {
    // console.log("add links");
  };

  return (
    <Container sx={{ width: "95%" }}>
      {buckets.map((item, index) => {
        return (
          <LinksBucket
            key={index}
            bucketName={buckets[index]}
            data={data.filter((item) => item.bucket === buckets[index])}
            link={
              bucketData.filter((item) => item.name === buckets[index])[0] || ""
            }
            deleteItem={(item)=>{deleteItem(item)
            console.log('linksshow', item);
            }}
            editLinkModal={(item)=>editLinkModal(item)}
          />
        );
      })}
    </Container>
  );
}

const style = {
  grid: {
    width: "100%",
  },
};
