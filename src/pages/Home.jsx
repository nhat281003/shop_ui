import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Filter from "../components/Filter";
import { Container, Grid2 as Grid, Box } from "@mui/material";
import { shopService } from "../services/shopServices";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    categoryName: "",
    name: "",
  });
  const [isReset, setIsReset] = useState(false);
  useEffect(() => {
    getListData();
  }, []);
  useEffect(() => {
    if (isReset) {
      getListData();
      setIsReset(false);
    }
  }, [isReset]);
  const getListData = async () => {
    const res = await shopService().getList(search);
    setData(res.data);
  };
  const handleCatChange = (e) => {
    setSearch({ ...search, categoryName: e });
  };
  const handleNameChange = (e) => {
    setSearch({ ...search, name: e });
  };
  const handleReset = async () => {
    setSearch(() => ({
      categoryName: "",
      name: "",
    }));
    setIsReset(true);
  };
  const handleRedirect = (e) => {
    window.location.href = `/detail?id=${e}`;
  };
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Filter
          data={search}
          onCatChange={handleCatChange}
          onNameChange={handleNameChange}
          onReset={handleReset}
          onSubmit={getListData}
        />
      </Grid>
      {data.map((item, index) => (
        <Grid size={4} key={index}>
          <CardItem data={item} handleClick={handleRedirect} />
        </Grid>
      ))}
    </Grid>
  );
}
