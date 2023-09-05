
//import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, /*Burger,*/ rem } from '@mantine/core';
//import { useDisclosure } from '@mantine/hooks';
//import Link from "next/link";
import SaturnLogo from '../Logo/saturn-logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

/*
interface HeaderMiddleProps {
  links?: {link: string; label: string}[] 
}
*/
/*
interface HeaderMiddlePropsProps {
  links: HeaderMiddleProps[]
}
*/
export function HeaderMiddle({/*{ links }: HeaderMiddleProps*/}) {
  
  //const [opened, { toggle }] = useDisclosure(false);
  //const [active, setActive] = useState(links[0].link);
  const { classes, /*cx*/ } = useStyles();

  /*
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
      {link.label}
    </Link>
  ));
  */
  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <ActionIcon size="xl"> 
          <SaturnLogo wid={50}/>
        </ActionIcon>
        {/*
          <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
        */}
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ColorSchemeToggle />
          <ActionIcon size="lg" radius="xl">
            <FontAwesomeIcon icon={faList} size="lg"/>
          </ActionIcon>
          <ActionIcon size="lg">
            <FontAwesomeIcon icon={faUser} size="lg"/>
          </ActionIcon>
          <ActionIcon size="lg">
            <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}