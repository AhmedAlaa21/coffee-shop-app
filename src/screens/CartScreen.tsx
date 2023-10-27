import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import Header from '../components/Header';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';
const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const IncrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const DecrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const CalculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <Header title="Cart" />
            {CartList.length === 0 ? (
              <EmptyListAnimation title="Your cart is empty!" />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((item: any) => (
                  <TouchableOpacity onPress={() => {}} key={item.id}>
                    <CartItem
                      id={item.id}
                      name={item.name}
                      imagelink_square={item.imagelink_square}
                      roasted={item.roasted}
                      prices={item.prices}
                      type={item.type}
                      special_ingredient={item.special_ingredient}
                      incrementCartItemQuantityHandler={
                        IncrementCartItemQuantity
                      }
                      decrementCartItemQuantityHandler={
                        DecrementCartItemQuantity
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length !== 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default CartScreen;
