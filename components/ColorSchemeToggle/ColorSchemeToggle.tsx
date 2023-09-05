import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        /*
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.gray[7],
        })}
        */
      >
        {colorScheme === 'dark' ? (
          <FontAwesomeIcon icon={faSun} size="lg"/>
        ) : (
          <FontAwesomeIcon icon={faMoon} size="lg"/>
        )}
      </ActionIcon>
    </Group>
  );
}
