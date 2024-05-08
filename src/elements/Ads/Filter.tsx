import { Typography, Button } from "@mui/material"
import { Stack, SxProps } from "@mui/system"
import Icon from "../../components/Icon"
import { allButtonStyles, containerStyles, otherButtonStyles, titleStyles } from "./styles";

const FilterButton: React.FC<{ icon: 'all' | 'rewards' | 'results' | 'movie', text: string, styles: SxProps, color?: string }> = ({ icon, text, styles, color }) => (
  <Button startIcon={<Icon name={icon} />} variant="text" sx={styles} disabled>
    <Typography variant="body1" sx={{ color: color }}>{text}</Typography>
  </Button>
);

const Filter = () => {
  return (
    <Stack direction="column" sx={containerStyles}>
      <Typography variant="h3" sx={titleStyles}>
        Фильтр ленты
      </Typography>
      <Stack direction="column" sx={{ width: "100%", gap: "12px", padding: '0', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <FilterButton icon="all" text="Все" styles={allButtonStyles} color={allButtonStyles.color} />
        <FilterButton icon="results" text="Результаты соревнований" styles={otherButtonStyles} color={otherButtonStyles.color} />
        <FilterButton icon="movie" text="Видео" styles={otherButtonStyles} color={otherButtonStyles.color} />
        <FilterButton icon="rewards" text="Достижения" styles={otherButtonStyles} color={otherButtonStyles.color} />
      </Stack>
    </Stack>
  );
};

export default Filter;
