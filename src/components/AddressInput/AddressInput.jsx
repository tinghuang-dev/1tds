import React, { useState } from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import goToMapPageByAddress from '../../lib/googleMap/goToMapPageByAddress';
import useAddressPredictions from '../../lib/googleMap/useAddressPredictions';
import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import Text from '../Text';
import TruncateText from '../TruncateText';

const ListHover = styled(Box)`
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
    }
`;

const Item = styled(Flex)(
  {
    alignItems: 'center',
  },
  styledVariant({
    prop: 'size',
    variants: {
      sm: { px: 'xs' },
      md: { px: 'sm' },
      lg: { px: 'sm' },
    },
  }),
);

const SizePredictionList = styled(Flex)(styledVariant({
  prop: 'size',
  variants: {
    sm: {
      height: '30px',
      alignItems: 'center',
      px: 'xs',
    },
    md: {
      height: '40px',
      alignItems: 'center',
      px: 'sm',
    },
    lg: {
      height: '50px',
      alignItems: 'center',
      px: 'sm',
    },
  },
}));

const SizePredictionText = styled(Text)(styledVariant({
  prop: 'size',
  variants: {
    sm: {
      pl: 'xs',
      fontSize: 'sm',
      fontFamily: 'arial',
    },
    md: {
      pl: 'sm',
      fontSize: 'md',
      fontFamily: 'arial',
    },
    lg: {
      pl: 'sm',
      fontSize: 'lg',
      fontFamily: 'arial',
    },
  },
}));

const ButtonContainer = styled(Box)(styledVariant({
  prop: 'size',
  variants: {
    sm: { pl: 'sm' },
    md: { pl: 'md' },
    lg: { pl: '1x' },
  },
}));

const AddressInput = ({
  size,
  variant,
  prefix,
  suffix,
  predictionPrefix,
  searchButton,
  layout,
  formOnclick,
  formOnchange,
  readOnly,
  initialValue,
}) => {
  const [value, setValue] = useState('');
  const [address, setAddress] = useState();

  const predictions = useAddressPredictions(value);

  const handleInput = (event) => {
    setValue(event.target.value);
    setAddress();
    if (formOnchange) {
      formOnchange(event.target.value);
    }
  };

  const onPredictionClick = (prediction) => {
    setValue(prediction.description);
    setAddress(prediction);
    if (formOnclick) {
      formOnclick(prediction);
    }
  };

  return (
    <Box width="100%" display={layout}>
      <Flex position="relative" flex="1">
        <Box width="100%" bg="grey" borderRadius="default">
          <Input
            value={initialValue || value}
            onChange={handleInput}
            size={size}
            variant={variant}
            prefix={prefix}
            suffix={suffix}
            onClick={() => setValue('')}
            readOnly={readOnly}
          />
        </Box>
        {(!address && value) && (
        <Box
          bg="white"
          border="@1"
          borderColor="grey"
          borderRadius="default"
          position="absolute"
          width="100%"
          top="101%"
          zIndex="popup"
        >
          {predictions?.map((prediction) => (
            <ListHover key={prediction.place_id}>
              <SizePredictionList
                size={size}
                onClick={() => onPredictionClick(prediction)}
              >
                {predictionPrefix && (<Item size={size}>{predictionPrefix}</Item>)}
                <TruncateText>
                  <SizePredictionText size={size}>
                    {prediction.description}
                  </SizePredictionText>
                </TruncateText>
              </SizePredictionList>
            </ListHover>
          ))}
        </Box>
        )}
      </Flex>
      {searchButton && (
        <Flex justifyContent="flex-end">
          <ButtonContainer size={size} mt={['4px', null, 0]}>
            <Button
              size={size}
              onClick={() => goToMapPageByAddress(address)}
            >
              {searchButton}
            </Button>
          </ButtonContainer>
        </Flex>
      )}
    </Box>
  );
};

export default AddressInput;
