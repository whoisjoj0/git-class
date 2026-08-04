import { render, screen } from '@testing-library/react';
import App from './App';
import ProfileColumn from './ProfileColumn';
import profilesData from './profilesData';

test('renders the engineering team heading and profile cards', () => {
  render(<App />);
  expect(screen.getByText('Engineering Team')).toBeInTheDocument();
  expect(screen.getByText('Alice Chen')).toBeInTheDocument();
});

test('renders a profile card inside a Bootstrap column wrapper', () => {
  render(<ProfileColumn profile={profilesData[0]} />);
  expect(screen.getByText('Alice Chen')).toBeInTheDocument();
  expect(screen.getByText('Lead Engineer')).toBeInTheDocument();
  expect(document.querySelector('.col-md-4')).toBeInTheDocument();
});
