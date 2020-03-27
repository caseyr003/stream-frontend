import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: '#fff',
    backgroundColor: '#3a9dd3'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: 'left',
    marginLeft: '60px'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: '#fff'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  orderButton: {
    backgroundColor: '#3a9dd3',
    '&:hover': {
      backgroundColor: '#1B76A6',
    }
  }
}));

export const tiers = [
  {
    title: 'Mobile Store',
    amount: '1',
    description: [
      '1 random order',
      'Published to OCI Stream',
      'From Mobile Store',
      'Random user'],
    buttonText: 'Stream Order',
    buttonVariant: 'contained',
  },
  {
    title: 'Online Store',
    subheader: 'Most popular',
    amount: '50',
    description: [
      '50 random order',
      'Published to OCI Stream',
      'From Online Store',
      'Random user'],
    buttonText: 'Stream Orders',
    buttonVariant: 'contained',
  },
  {
    title: 'Physical Store',
    amount: '10',
    description: [
      '10 random order',
      'Published to OCI Stream',
      'From Physical Store',
      'Random user'],
    buttonText: 'Stream Orders',
    buttonVariant: 'contained',
  },
];

export const footers = [
  {
    title: 'Oracle Cloud Infrastructure',
    description: ['Compute', 'Networking', 'Storage'],
  },
  {
    title: 'OCI Streaming Service',
    description: ['Kafka', 'Publish Messages', 'Consume Messages'],
  },
  {
    title: 'OCI Object Storage',
    description: ['Store Messages from Stream', 'JSON data'],
  }
];