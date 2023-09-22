

import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';

export const JournalPage = () => {

  return (
    <JournalLayout>


      <NothingSelectedView />

      {/* <IconButton
        size='large'
        disabled={isSaving}
        onClick={newNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined
          sx={{ fontSize: 30 }}
        />
      </IconButton> */}

    </JournalLayout>
  )
}
