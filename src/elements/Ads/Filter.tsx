import { Typography, Button } from "@mui/material"
import { Stack } from "@mui/system"
import Icon from "../../components/Icon"
import { allButtonStyles, containerStyles, otherButtonStyles, titleStyles } from "./styles";

// TODO: remove any
const FilterButton: React.FC<{ icon: 'all' | 'rewards' | 'results' | 'movie', text: string, styles: any }> = ({ icon, text, styles }) => (
  <Button startIcon={<Icon name={icon} />} variant="text" sx={styles} disabled>
    <Typography variant="body1" sx={{color: styles.color}}>{text}</Typography>
  </Button>
);

const Filter = () => {
  return (
    <Stack direction="column" sx={containerStyles}>
      <Typography variant="h3" sx={titleStyles}>
        Фильтр ленты
      </Typography>
      <Stack direction="column" sx={{ width: "100%", gap: "12px", padding: '0', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <FilterButton icon="all" text="Все" styles={allButtonStyles} />
        <FilterButton icon="results" text="Результаты соревнований" styles={otherButtonStyles} />
        <FilterButton icon="movie" text="Видео" styles={otherButtonStyles} />
        <FilterButton icon="rewards" text="Достижения" styles={otherButtonStyles} />
      </Stack>
    </Stack>
  );
};

export default Filter;
