const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const initialState = {
  verified: false,
};


function startVerification() {
  const body = { 
    to: '+12313576187' 
  };

  const options = {
    method: 'POST',
    body: new URLSearchParams(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  };

  fetch('http://flex-verify-4625-dev.twil.io/start-verify', options)
    .then(resp => resp.json())
    .then(data => console.log(data));
}

function checkVerification() {
  return true;
}

export class Actions {
  static startVerification = () => ({
    type: ACTION_START_VERIFICATION
  })

  static checkVerification = () => ({
    type: ACTION_CHECK_VERIFICATION
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_START_VERIFICATION: {
      startVerification();
      return {
        ...state,
        verified: true,
      };
    }

    case ACTION_CHECK_VERIFICATION: {
      var verified = checkVerification();
      return {
        ...state,
        verified: verified,
      }
    }

    default:
      return state;
  }
}
