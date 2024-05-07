export const containerStyles = {
  width: '330px',
  gap: "24px",
  padding: '24px 20px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'primary.main',
  borderRadius: '20px'
};

export const titleStyles = {
  color: 'primary.contrastText'
};

export const buttonStyles = {
  width: '100%',
  justifyContent: 'flex-start',
  textTransform: 'none',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  alignItems: 'center'
};

export const allButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#f1f3f7",
  color: "primary.contrastText"
};

export const otherButtonStyles = {
  ...buttonStyles,
  color: "primary.light"
};

